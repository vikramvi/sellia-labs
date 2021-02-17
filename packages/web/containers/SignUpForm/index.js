import React, { useEffect, useState } from "react";
import Router from "next/router";
import { withFormik } from "formik";
import * as Yup from "yup";
import Icon from "react-icons-kit";
import { locked } from "react-icons-kit/iconic/locked";
import { phone } from "react-icons-kit/iconic/phone";

import Text from "reusecore/src/elements/Text";
import Button from "reusecore/src/elements/Button";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import Box from "reusecore/src/elements/Box";
import {
  FormGroup,
  ErrorNotification,
  SuccessNotification,
} from "../SignInForm/style";
import { REGISTER } from "core/graphql/Mutations";
import { useMutation } from "@apollo/react-hooks";
import AuthHelper from "../../helpers/authHelper";
import { setFirebaseCookie } from "../../helpers/session";
import redirect from "../../helpers/redirect";
import SignUpSuccessModal from "../ModalContainer/SignUpSuccessModal";
import { openModal, closeModal } from "@redq/reuse-modal";

const SignupEnhancher = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    name: "",
    email: "",
    password: "",
    remember: false,
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string().required("Password is required"),
    name: Yup.string().required("Name is required"),
  }),
});

let token = "";
const SignUpForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
  setFieldValue,
}) => {
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registerMutation, { data }] = useMutation(REGISTER);

  handleSubmit = async () => {
    setLoading(true);
    console.log("errors ->", errors);
    if (!Object.keys(errors).length) {
      const { name, email, password } = values;
      const provider = "password";
      const { user, error } = await AuthHelper.signupWithEmail(
        provider,
        name,
        email,
        password
      );

      if (user) {
        // token = await user.getIdToken();
        // setFieldValue("token", token);
        setSuccess(true);
        setLoading(false);
        // redirect({ initiateSignup: true }, "/signin");

        // setFieldValue("token", user.uid);
      } else if (error) {
        setLoading(false);
        setError(new Error(error));
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async function() {
      try {
        if (values.token) {
          const res = await registerMutation({
            variables: { user: { email: values.email, token: values.token } },
          });
          if (res && res.data && res.data.register) {
            setLoading(false);
            const user = res.data.register;
            // setFirebaseCookie("id_token", token);
            // setFirebaseCookie("user", { ...user });
            // redirect({}, "/signin");
          }
        }
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [values.token]);
  return (
    <>
      {/* auth page header section */}
      <AuthHeader mb={1} />

      {/* signup form */}
      {success && (
        <Box
          flexBox
          // mt={20}
          mb={15}
          justifyContent="center"
          alignItems="center"
        >
          <SuccessNotification>{`We've sent you a verification email- please click on link to complete the signing up process. if you don't see an email in your inbox, please check your spam or junk folder.`}</SuccessNotification>
        </Box>
      )}
      <FormGroup className={errors.name ? "hasErrorMsg" : ""}>
        <Input
          elementType="input"
          elementConfig={{
            type: "name",
            required: "required",
          }}
          value={values.name}
          error={errors.name}
          touched={touched}
          label="Name"
          onBlur={handleBlur("name")}
          changed={handleChange("name")}
          highlightColor="#f09"
        />
        <span className="errorMsg">
          {errors.name && touched.name && errors.name}
        </span>
      </FormGroup>

      <FormGroup className={errors.email ? "hasErrorMsg" : ""}>
        <Input
          elementType="input"
          elementConfig={{
            type: "email",
            required: "required",
          }}
          value={values.email}
          error={errors.email}
          touched={touched}
          label="Email"
          onBlur={handleBlur("email")}
          changed={handleChange("email")}
          highlightColor="#f09"
        />
        <span className="errorMsg">
          {errors.email && touched.email && errors.email}
        </span>
      </FormGroup>

      <FormGroup className={errors.password ? "hasErrorMsg" : ""}>
        <Input
          elementType="input"
          elementConfig={{
            type: "password",
            required: "required",
          }}
          value={values.password}
          error={errors.password}
          onBlur={handleBlur("password")}
          touched={touched}
          label="Password"
          changed={handleChange("password")}
        />
        <span className="errorMsg">
          {errors.password && touched.password && errors.password}
        </span>
      </FormGroup>

      {error.message ? (
        <Box
          flexBox
          mt={20}
          mb={15}
          justifyContent="center"
          alignItems="center"
        >
          <ErrorNotification>{error.message}</ErrorNotification>
        </Box>
      ) : (
        ""
      )}

      <Button
        onClick={handleSubmit}
        title="Sign up now"
        width={1}
        isLoading={loading}
        loaderColor="#fff"
        icon={<Icon icon={locked} size={21} />}
        mt={20}
      />

      {/* signin page redirection section */}

      <Box flexBox mt={20} justifyContent="center" alignItems="center">
        <Text content=" Have an account ?" color="#8C8C8C" mb="0" />

        <Button
          title="Sign In"
          variant="textButton"
          ml="5px"
          onClick={() => Router.push("/signin")}
        />
      </Box>
    </>
  );
};

export default SignupEnhancher(SignUpForm);
