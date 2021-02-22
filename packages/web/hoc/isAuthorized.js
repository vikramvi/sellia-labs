import React, { Component } from "react";
import AuthHelper from "../helpers/authHelper";

/**
 * For those routes where authenticated used can't navigate like login route
 */
export default (ComposedComponent) =>
  class IsAuthorized extends Component {
    state = {
      isVerified: false,
    };

    async componentDidMount() {
      const isVerified = await AuthHelper.isVerified();
      this.setState({ isVerified: !isVerified });
    }

    render() {
      return (
        <ComposedComponent {...this.props} isVerified={this.state.isVerified} />
      );
    }
  };
