import React, { Component } from 'react';
import redirect from '../helpers/redirect';
import { getFirebaseCookie } from '../helpers/session';

/**
 * For those routes where authenticated used can't navigate like login route
 */
export default ComposedComponent =>
  class IsAuthenticated extends Component {
    static async getInitialProps(context) {
      const token = getFirebaseCookie('id_token', context);
      const isLoggedIn = token ? true : false;
      if (isLoggedIn) {
        redirect(context, '/');
      }
      return { isLoggedIn };
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
