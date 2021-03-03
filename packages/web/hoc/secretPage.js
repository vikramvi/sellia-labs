import React, { Component } from "react";
import redirect from "../helpers/redirect";
import { getFirebaseCookie } from "../helpers/session";
import Router from "next/router";

/**
 * HOC for all the secret route
 */
export default (ComposedComponent) =>
  class SecretPage extends Component {
    static async getInitialProps(context) {
      console.log("context ---", context);

      const token = getFirebaseCookie("id_token", context);
      let user = false;
      user = getFirebaseCookie("user", context);
      const isLoggedIn = token ? true : false;
      if (!isLoggedIn) {
        let signin = "/signin";

        if (context.asPath.length > 1) {
          signin += "?origin=" + context.asPath;
        }
        redirect(context, signin);
      }
      return {
        isLoggedIn,
        userId: user ? user.userId : "false",
        email: user ? user.email : false,
        error: user ? user.error : false,
        user: user,
      };
      // return {
      //   isLoggedIn: true,
      //   userId: '3OqYVOVFVWagABCNpt040372egy2',
      //   email: 'paulruet58@gmail.com',
      //   error: user ? user.error : false,
      // };
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
