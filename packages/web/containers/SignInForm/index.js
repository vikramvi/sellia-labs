import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-icons-kit';
import { locked } from 'react-icons-kit/iconic/locked';
import { phone } from 'react-icons-kit/iconic/phone';
import Switch from 'reusecore/src/elements/Switch';
import Text from 'reusecore/src/elements/Text';
import Button from 'reusecore/src/elements/Button';
import AuthHeader from '../../components/AuthHeader';
import Input from '../../components/Input';
import Box from 'reusecore/src/elements/Box';
import { FormGroup, ErrorNotification } from './style';
import { LOGIN } from 'core/graphql/Mutations';
import { useMutation } from '@apollo/react-hooks';
import AuthHelper from '../../helpers/authHelper';
import { setFirebaseCookie } from '../../helpers/session';
import redirect from '../../helpers/redirect';

const SignInEnhancher = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({ email: '', password: '', remember: false }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string().required('Password is required'),
  }),
});
let token = '';
const SignInForm = ({
  handleSubmit,
  values,
  handleChange,
  touched,
  errors,
  setFieldValue,
  handleBlur,
}) => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleCheckboxChange = checked => {
    setFieldValue('remember', checked);
  };

  const [loginMutation, { data }] = useMutation(LOGIN);

  handleSubmit = async () => {
    setLoading(true);
    if (!Object.keys(errors).length) {
      const { email, password } = values;
      const provider = 'password';
      const { user, error } = await AuthHelper.login(provider, email, password);
      if (user) {
        token = await user.getIdToken();
        setFieldValue('token', token);
      } else if (error) {
        setLoading(false);
        setError(error);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async function() {
      try {
        if (values.token) {
          const res = await loginMutation({
            variables: { user: { email: values.email, token: values.token } },
          });
          if (res && res.data && res.data.login) {
            setLoading(false);
            const user = res.data.login;
            setFirebaseCookie('id_token', values.token);
            setFirebaseCookie('user', { ...user });
            redirect({}, '/');
          }
        }
      } catch (error) {
        setLoading(false);
        return error;
      }
    })();
  }, [values.token]);

  return (
    <>
      {/* auth page header section */}
      <AuthHeader />
      {/* signin form */}
      <FormGroup className={errors.email ? 'hasErrorMsg' : ''}>
        <Input
          elementType="input"
          elementConfig={{
            type: 'email',
            required: 'required',
          }}
          onBlur={handleBlur('email')}
          value={values.email}
          error={errors.email}
          touched={touched}
          label="Email"
          changed={handleChange('email')}
        />
        <span className="errorMsg">
          {errors.email && touched.email && errors.email}
        </span>
      </FormGroup>
      <FormGroup className={errors.password ? 'hasErrorMsg' : ''}>
        <Input
          elementType="input"
          elementConfig={{
            type: 'password',
            required: 'required',
          }}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password}
          touched={touched}
          label="Password"
          changed={handleChange('password')}
        />
        <span className="errorMsg">
          {errors.password && touched.password && errors.password}
        </span>
      </FormGroup>

      {error.message ? (
        <Box
          flexBox
          mt={25}
          mb={35}
          justifyContent="center"
          alignItems="center"
        >
          <ErrorNotification>{error.message}</ErrorNotification>
        </Box>
      ) : (
        ''
      )}

      <Button
        //disabled={errors.length !== 0}

        onClick={handleSubmit}
        isLoading={loading}
        loaderColor="#fff"
        title="Sign in now"
        width={1}
        icon={<Icon icon={locked} size={16} />}
      />
      {/* separator text */}
      <Text
        fontSize={14}
        color="#8C8C8C"
        content="Or"
        textAlign="center"
        mt={16}
      />

      <Button
        title="Sign in with"
        bg="#5CABE6"
        width={1}
        icon={<Icon icon={phone} size={16} />}
        onClick={() => Router.push('/mobile-signin')}
      />

      <Box flexBox mb={25} mt={25} justifyContent="center">
        {/* <Switch
          isChecked={false}
          isMaterial
          switchSize="40px"
          handleSwitch={checked => handleCheckboxChange(checked)}
          labelText="Remember Me"
          labelPosition="right"
          fontSize={12}
        /> */}

        <Button
          fontSize={12}
          title="Forgot Password ?"
          variant="textButton"
          onClick={() => Router.push('/forget-password')}
          style={{
            minHeight: 'auto',
          }}
        />
      </Box>

      {/* signup page redirection section */}
      <Box
        flexBox
        mt={0}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Text color="#8C8C8C" content="Don't have an account?" mb="5px" />
        <Button
          title="Sign Up"
          ml="5px"
          mb="5px"
          variant="textButton"
          onClick={() => Router.push('/signup')}
          style={{
            minHeight: 'auto',
          }}
        />
      </Box>
    </>
  );
};

export default SignInEnhancher(SignInForm);
