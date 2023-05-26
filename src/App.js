import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body/Body";
import Backdrop from "./Components/Backdrop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyContent from "./Components/BodyContent";
import Contact from "./Components/Contact";
import About from "./Components/About";
import axios from "axios";
import { useEffect } from "react";
import ModalCheck from "./Components/ModalCheck";
import Modal from "./Components/Modal";
import { ToastContainer, toast } from "react-toastify";
import { getDefaultNormalizer } from "@testing-library/react";

function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("No error");
    const [modal, setModal] = useState(true);

    const getData = async () => {
        var response = await axios.get("http://localhost:3006/employee");
        console.log(data);
    };

    useEffect(() => {
        axios
            .get("http://localhost:3006/employee")
            .then((response) => setData(response.data));
    }, []);

    useEffect(() => {
        getData();
    }, []);

    // function closeSidebar() {
    //     setBackdrop((prevState) => !prevState);
    // }

    const [sidebar, setSidebar] = useState(false);

    const showModal = () => {
        setModal((prevState) => !prevState);
    };

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
        console.log(sidebar);
    };

    const delNotify = () => {
        toast.warn("User deleted!", {
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
        <div className="container">
            <Backdrop sidebar={sidebar} clickSidebar={toggleSidebar} />
            <Header
                className="wrapper1"
                clickSidebar={toggleSidebar}
                sidebar={sidebar}
            />
            <Body
                className="wrapper2"
                sidebar={sidebar}
                clickSidebar={toggleSidebar}
                data={data}
                error={error}
                showModalBody={showModal}
                reload={getData}
            />
            {modal && (
                <Modal
                    hideModal={showModal}
                    delNotifyApp={delNotify}
                    id={data.id}
                />
            )}
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Footer className="wrapper3" />
        </div>
    );
}

export default App;
