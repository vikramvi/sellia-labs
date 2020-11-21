import React, { Component } from 'react';
import { getFirebaseCookie } from '../helpers/session';

export default ComposedComponent =>
  class PublicPage extends Component {
    static async getInitialProps(context) {
      const token = getFirebaseCookie('id_token', context);
      const isLoggedIn = token ? true : false;
      return { isLoggedIn };
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
