import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import withUser from "../../containers/user";
import { getUser } from "../../services/user";

const Detail = ({ user, users, setUser }) => {
  const { id } = useParams();

  useEffect(async () => {
    const result = await getUser(id);
    setUser(result);
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.phone}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

Detail.propTypes = {
  users: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default withUser(Detail);
