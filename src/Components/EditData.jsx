import axios from "axios";
import React, { useState } from "react";
import { Form, NavLink } from "react-router-dom";
import "./EditData.css";

function EditData(props) {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [zip, setZip] = useState();

    const handleID = (e) => {
        setId(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleUserName = (e) => {
        setUsername(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleZip = (e) => {
        setZip(e.target.value);
    };

    const submitHandler = () => {
        console.log(id);
        console.log(name);
        console.log(username);
        console.log(email);
        console.log(zip);
        axios
            .post("http://localhost:3006/employee", {
                id: id,
                name: name,
                username: username,
                email: email,
                address: {
                    zipcode: zip,
                },
            })
            .then(console.log("Success"))
            .catch((e) => console.log(e.message));
        props.editNotify();
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-container">
                    <div className="form-wrapper">
                        <div className="id-field">
                            <input
                                type="text"
                                placeholder="User ID"
                                onChange={handleID}
                            />
                        </div>
                        <div className="name-field">
                            <input
                                type="text"
                                placeholder="Name"
                                onChange={handleName}
                            />
                        </div>
                        <div className="username-field">
                            <input
                                type="text"
                                placeholder="Username"
                                onChange={handleUserName}
                            />
                        </div>
                        <div className="email-field">
                            <input
                                type="text"
                                placeholder="Email"
                                onChange={handleEmail}
                            />
                        </div>
                        <div className="zip-field">
                            <input
                                type="text"
                                placeholder="Zip-code"
                                onChange={handleZip}
                            />
                        </div>
                    </div>
                    <NavLink to="/">
                        <button onClick={submitHandler}>Submit</button>
                    </NavLink>
                </div>
            </form>
        </div>
    );
}

export default EditData;
