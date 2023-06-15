import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../app.css'
import { url } from "../App";   

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []); 

  const getUsers = async () => {
    const response = await axios.get(`${url}/users`); 
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${url}/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-2">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add 
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead> 
            <tr>
              <th>No</th>
              <th>Name</th>     
              <th>Email</th>  
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td className="uname">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    DEL
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};    

export default UserList;
