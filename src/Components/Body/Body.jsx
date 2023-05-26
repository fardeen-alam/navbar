import React from "react";
import Backdrop from "../Backdrop";
import Sidebar from "../Sidebar";
import BodyContent from "../BodyContent";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Body.css";
import UserTable from "../UserTable";
import EditData from "../EditData";
import UpdateData from "../UpdateData";

function Body(props) {
    // let Component;

    // switch(window.location.pathname){
    //   case "":
    // }

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

    const updateNotify = () => {
        toast.info("User details Updated!", {
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
        <div className="wrapper">
            <Sidebar sidebar={props.sidebar} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            editNotify={editNotify}
                            updateNotify={updateNotify}
                            data={props.data}
                            error={props.error}
                            showModalHome={props.showModalBody}
                            reload = {props.reload}
                        ></Home>
                    }
                >
                    <Route
                        path='/table'
                        element={
                            <UserTable data={props.data} error={props.error} msg="Hello" />
                        }
                    />
                </Route>
                <Route
                    path="/body-content"
                    element={<BodyContent></BodyContent>}
                />
                <Route path="/about" element={<About></About>} />
                <Route path="/contact" element={<Contact></Contact>} />
                <Route path="/editdata" element={<EditData editNotify={editNotify} relaod="msg" />} />
                <Route path="/updatedata" element={<UpdateData data={props.data}></UpdateData>} />
            </Routes>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick7
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Body;
