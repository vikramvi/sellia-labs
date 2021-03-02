import React, { Component } from "react";
import AuthHelper from "../helpers/authHelper";

export default (ComposedComponent) =>
  class IsAuthorized extends Component {
    state = {
      isVerified: false,
    };

    async componentDidMount() {
      console.log("IsAuthorized componentDidMount", this.state.isVerified);
    }

    isVerified = async () => {
      return await AuthHelper.isVerified();
    };

    render() {
      console.log("IsAuthorized render", this.state.isVerified);

      return (
        <ComposedComponent {...this.props} isVerified={this.isVerified()} />
      );
    }
  };
