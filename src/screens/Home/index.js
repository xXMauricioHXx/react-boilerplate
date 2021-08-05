import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUsers } from "../../services/user";
import withUser from "../../containers/user";
import Table from "../../components/Table";
import Button from "../../components/Button";

const Home = ({ users, setUsers }) => {
  useEffect(() => {
    async function fetchData() {
      const result = await getUsers();
      setUsers(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <Table
        cols={["Name", "Email", "Phone"]}
        rows={users}
        selectedRows={["name", "email", "phone"]}
        actions={[
          <Button style="warning" text="Edit" action={() => alert(1)} />,
          <Button style="danger" text="Remove" action={() => alert(1)} />,
        ]}
      />
    </>
  );
};

Home.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default withUser(Home);
