import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default (ComposedComponent) => {
  class RequireAuth extends Component {
    render() {
      const { user } = this.props;
      let check = user;
      if (!user)
        check = localStorage.theLedgerToken;
      switch (check) {
        case null:
          return <Redirect to='/' />;

        default:
          return <ComposedComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({ user }) => ({
    user: user,
  });

  return connect(mapStateToProps)(RequireAuth);
};
