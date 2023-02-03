import React from "react";

const UserItem = ({ user }) => {
  return (
    <div>
      <div
        className="card my-3 border border-0 bg-dark text-white"
        style={{ width: "14rem" }}
      >
        <img src={user.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">
            {user.first_name + " " + user.last_name}
          </h5>
          <p className="card-text">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
