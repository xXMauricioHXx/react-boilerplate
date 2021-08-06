import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import withUser from "../../containers/user";
import { getUser } from "../../services/user";
import Table from "../../components/Table";

const Detail = ({ user, users, setUser }) => {
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (users.length) {
        const foundUser = users.find(user => user.id === Number(id));

        if (foundUser) {
          setUser(foundUser);
        }
      } else {
        const result = await getUser(id);
        setUser(result);
      }
    }
    fetchData();
  }, [id, users, setUser]);

  return (
    <>
      {user ? (
        <Table
          cols={["Name", "Email", "Phone"]}
          rows={[user]}
          selectedRows={["name", "email", "phone"]}
          displayButtons={true}
        />
      ) : (
        <div>User not found</div>
      )}
    </>
  );
};

Detail.propTypes = {
  user: PropTypes.object,
  users: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default withUser(Detail);
