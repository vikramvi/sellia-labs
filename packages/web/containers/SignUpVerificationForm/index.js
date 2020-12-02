import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
import { FormGroup, ErrorNotification } from "../SignInForm/style";
import { REGISTER } from "core/graphql/Mutations";
import { useMutation } from "@apollo/react-hooks";
import AuthHelper from "../../helpers/authHelper";
import { setFirebaseCookie } from "../../helpers/session";
import redirect from "../../helpers/redirect";
import Heading from "reusecore/src/elements/Heading";
import { firebaseAuth } from "../../helpers/init";

const SignupEnhancher = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({ name: "", email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string().required("Password is required"),
  }),
});
let token = "";
const SignUpVerificationForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
  setFieldValue,
}) => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);
  const [registerMutation, { data }] = useMutation(REGISTER);
  const {
    query: { apiKey, mode, oobCode, continueUrl, lang },
  } = useRouter();

  handleSubmit = async () => {
    setLoading(true);
    redirect({}, "/signin");
  };

  const handleVerifyEmail = (actionCode, continueUrl, lang) => {
    console.log("actionCode ->", actionCode);

    // Localize the UI to the selected language as determined by the lang
    // parameter.
    // Try to apply the email verification code.
    firebaseAuth()
      .applyActionCode(actionCode)
      .then(function(resp) {
        // Email address has been verified.
        // TODO: Display a confirmation message to the user.
        // You could also provide the user with a link back to the app.
        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
        setLoading(false);
        handleVerifyEmailSuccess();
        console.log("resp ->", resp);
      })
      .catch(function(error) {
        // Code is invalid or expired. Ask the user to verify their email address
        // again.
        console.log("error ->", error);
        setLoading(false);
        handleVerifyEmailSuccess();
      });
  };

  const handleVerifyEmailSuccess = () => {
    setTimeout(() => {
      redirect({}, "/signin");
    }, 300);
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
            redirect({}, "/signin");
          }
        } else {
          // Handle the user management action.
          switch (mode) {
            case "resetPassword":
              // Display reset password handler and UI.
              handleResetPassword(oobCode, continueUrl, lang);
              break;
            case "recoverEmail":
              // Display email recovery handler and UI.
              handleRecoverEmail(oobCode, lang);
              break;
            case "verifyEmail":
              // Display email verification handler and UI.
              handleVerifyEmail(oobCode, continueUrl, lang);
              break;
            default:
            // Error: invalid mode.
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
      <AuthHeader
        title={{
          content: "Thanks for Signing Up!",
        }}
        description={{
          content: "Your email has been successfully verified!",
        }}
      />
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

      {!loading ? (
        <Box
          flexBox
          mt={20}
          mb={15}
          justifyContent="center"
          alignItems="center"
        >
          <Text>You will be redireted to Sign In page now</Text>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default SignupEnhancher(SignUpVerificationForm);
