import React, { Component } from 'react';
import { getFirebaseCookie } from '../helpers/session';
import Layout from '../containers/Layout';

/**
 * HOC for all pages except authentication routes like login route.
 *  This is where we have placed our top bar and menus
 */
export default ComposedComponent =>
  class withLayout extends Component {
    static async getInitialProps(context) {
      const token = await getFirebaseCookie('id_token', context);
      const location = await getFirebaseCookie('currentLocation', context);
      const user = await getFirebaseCookie('user', context);
      const isLoggedIn = token ? true : false;
      return {
        isLoggedIn,
        pathname: context.pathname,
        location,
        userId: user ? user.userId : 'false',
        email: user ? user.email : false,
        error: user ? user.error : false,
      };
    }
    render() {
      return (
        <Layout
          userId={this.props.userId}
          isLoggedIn={this.props.isLoggedIn}
          pathname={this.props.pathname}
        >
          <ComposedComponent {...this.props} />
        </Layout>
      );
    }
  };
