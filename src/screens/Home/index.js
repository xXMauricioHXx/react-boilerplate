import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getUsers } from "../../services/user";
import withUser from "../../containers/user";

const Home = ({ users, setUsers }) => {
  useEffect(async () => {
    const result = await getUsers();
    setUsers(result);
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/${user.id}`}>editar</Link>
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

Home.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default withUser(Home);
