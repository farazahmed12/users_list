import React, { useEffect, useState } from "react";
import axios from "axios";

import UserItem from "./UserItem.js";

const UserList = () => {
  // users array
  const [users, setUsers] = useState([]);
  // Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get("https://reqres.in/api/users?page=1");

      console.log(result.data.data);
      setUsers(result.data.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);
  return (
    <>
      <h2 className="text-center text-white">Users List Fetched from Api</h2>

      {loading ? (
        <div className="d-flex align-items-center justify-content-center mt-5">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="d-flex justify-content-evenly user_grid">
          {users.map((user, i) => (
            <UserItem key={i} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
