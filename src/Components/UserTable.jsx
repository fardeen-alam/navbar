import React from "react";
import { Outlet } from "react-router-dom";
import "./UserTable.css";

const UserTable = (props) => {
    console.log(props);
    function handleClick() {
        console.log(props.msg);
    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Zipcode</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.zipcode}</td>
                            <td>
                              <div className="btn-container">
                                <button className="table-edit-btn">Edit</button>
                                <button className="table-del-btn">Delete</button>
                                <button className="table-view-btn">View</button>
                              </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
