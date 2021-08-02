import React from "react";
import { connect } from "react-redux";
import { setUsers, setUser } from "../../store/actions";

export default function withUser(WrappedComponent) {
  const mapStateToProps = (state) => ({
    users: state.user.users,
    user: state.user.user,
  });

  const mapDispatchToProps = (dispatch) => ({
    setUsers: (value) => dispatch(setUsers(value)),
    setUser: (value) => dispatch(setUser(value)),
  });

  const User = (props) => <WrappedComponent {...props} />;

  return connect(mapStateToProps, mapDispatchToProps)(User);
}
