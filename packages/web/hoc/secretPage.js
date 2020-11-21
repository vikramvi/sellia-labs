import React, { Component } from 'react';
import redirect from '../helpers/redirect';
import { getFirebaseCookie } from '../helpers/session';

/**
 * HOC for all the secret route
 */
export default ComposedComponent =>
  class SecretPage extends Component {
    static async getInitialProps(context) {
      const token = getFirebaseCookie('id_token', context);
      let user = false;
      user = getFirebaseCookie('user', context);
      const isLoggedIn = token ? true : false;
      if (!isLoggedIn) {
        redirect(context, '/signin');
      }
      return {
        isLoggedIn,
        userId: user ? user.userId : 'false',
        email: user ? user.email : false,
        error: user ? user.error : false,
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
