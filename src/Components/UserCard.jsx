import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./UserCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserCard(props) {
    // const handleClick = () => {
    //     // props.onNotify();
    //     console.log('Button clicked');
    // }
    const handleDelete = () => {
        axios
            .delete(`http://localhost:3006/employee/${props.id}`)
            .then(props.reload);
    };

    const editNotify = () => {
        toast.success("User details updated!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="user-container">
            <div className="user-data">
                <div>
                    <h2>{props.name}</h2>
                </div>
                <div className="username">
                    <span className="title">Username : </span>
                    {props.username}
                </div>
                <div className="email">
                    <span className="title">Email : </span>
                    <a href="#">{props.email}</a>
                </div>
                <div className="crud-btn">
                    <NavLink to="/updatedata">
                        <button className="edit-btn">Edit</button>
                    </NavLink>
                    <button className="del-btn" onClick={handleDelete}>
                        Delete
                    </button>
                    <button className="update-btn" onClick={editNotify}>
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
