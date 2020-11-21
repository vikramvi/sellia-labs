import React, {
  useContext,
  useState,
  createContext,
  createElement,
} from 'react';

const FormikContext = createContext(null);

export function Formik({
  initialValues,
  validate,
  onSubmit,
  validateOnBlur = true,
  validateOnChange = true,
  ...props
}) {
  const [values, updateValues] = useState(initialValues);
  const [errors, updateErrors] = useState({});
  const [touched, updateTouched] = useState({});
  const [submitAttemptCount, updateSubmitAttemptCount] = useState(0);
  const [isSubmitting, updateIsSubmitting] = useState(false);
  const [isValidating, updateIsValidating] = useState(false);

  function validateForm(vals = values) {
    updateIsValidating(true);
    return Promise.resolve(validate ? validate(vals) : {})
      .then(x => x, e => e)
      .then(e => {
        // return or take a callback?
        updateErrors(e);
        updateIsValidating(false);
      });
  }

  function getFieldProps(name, type) {
    return {
      value:
        type === 'radio' || type === 'checkbox'
          ? undefined // React uses checked={} for these inputs
          : values[name],
      onChange(e) {
        e.persist();
        updateValues(
          prevValues => ({ ...prevValues, [name]: e.target.value }),
          () => {
            if (validateOnChange && validate) {
              validateForm();
            }
          }
        );
      },
      onBlur() {
        updateTouched(
          prevTouched => ({ ...prevTouched, [name]: true }),
          () => {
            if (validateOnChange && validate) {
              validateForm();
            }
          }
        );
      },
    };
  }

  async function submitForm() {
    updateTouched(setNestedObjectValues(values, true));
    updateIsSubmitting(true);
    updateSubmitAttemptCount(prev => prev++);
    try {
      await validateForm();
      const errors = await onSubmit(values);
      if (errors) {
        updateErrors(errors);
      }
      updateIsSubmitting(false);
    } catch (errors) {
      updateErrors(errors);
      updateIsSubmitting(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm();
  }

  const ctx = {
    values,
    updateValues,
    errors,
    updateErrors,
    touched,
    updateTouched,
    submitAttemptCount,
    updateSubmitAttemptCount,
    isSubmitting,
    updateIsSubmitting,
    isValidating,
    validateOnChange,
    validateOnBlur,
    getFieldProps,
    handleSubmit,
    submitForm,
  };

  return (
    <FormikContext.Provider value={ctx}>
      {props.children}
    </FormikContext.Provider>
  );
}

export function Form(props) {
  const formik = useContext(FormikContext);
  return <form onSubmit={formik.handleSubmit} {...props} />;
}

export function Debug(props) {
  const formik = useContext(FormikContext);
  return null;
}

// Backwards compatible Field
export function Field({
  component = 'input',
  render,
  children,
  name,
  ...props
}) {
  const { getFieldProps } = useContext(FormikContext);

  const fieldProps = {
    ...getFieldProps(name, props.type),
    ...props,
  };

  if (children && typeof children === 'function') {
    return children(fieldProps);
  }

  if (render && typeof render === 'function') {
    return render(fieldProps);
  }

  return createElement(component, fieldProps, children);
}

/** @private is the given object an Object? */
export const isObject = obj => obj !== null && typeof obj === 'object';

/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */
export function setNestedObjectValues(
  object,
  value,
  visited = new WeakMap(),
  response = {}
) {
  for (let k of Object.keys(object)) {
    const val = object[k];
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
}
