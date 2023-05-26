import React from "react";
import UserCard from "./UserCard";
import "./Home.css";
import { NavLink, Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import UserTable from "./UserTable";
import UserCardGenerator from "./UserCardGenerator";

function Home(props) {
    return (
        <>
            <div className="home-navbar">
                <NavLink to="/" className="card-link">
                    Card
                </NavLink>
                <NavLink to="/table" className="table-link">
                    Table
                </NavLink>
            </div>


            <div className="home-container">
            
                <Routes>
                    <Route path="/" element={
                        <>

                        <UserCardGenerator 
                            data = {props.data}
                            error = {props.error}
                            showModalHome={props.showModalHome}
                            reload={props.reload}
                            updateNotify={props.updateNotify}
                        />
                            
                        </>
                    }/>
                    
                </Routes>
                
            </div>
            <Outlet />
        </>
    );
}

export default Home;
