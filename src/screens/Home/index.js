import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getUsers } from "../../services/user";
import withUser from "../../containers/user";
import Table from "../../components/Table";

const Home = ({ users, setUsers }) => {
  useEffect(() => {
    async function fetchData() {
      const result = await getUsers();
      setUsers(result);
    }
    fetchData();
  }, [setUsers]);

  return (
    <>
      <Table
        cols={["Name", "Email", "Phone"]}
        rows={users}
        selectedRows={["name", "email", "phone"]}
        displayButtons={true}
      />
    </>
  );
};

Home.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default withUser(Home);
