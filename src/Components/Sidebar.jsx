import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ sidebar }) {
    function closeSidebar() {
        const sidebar = document.getElementById("sidebar");
        const backdrop = document.getElementById("backdrop");
        const btn = document.getElementById("sidebar-button");
        // const msg = backdrop? 'access' : 'No access';
        // console.log(msg);
        btn.classList = "";
        btn.classList.add("icon--open");
        btn.classList.add("fa-solid");
        btn.classList.add("fa-bars");
        backdrop.classList.remove("backdrop--open");
        sidebar.classList.remove("sidebar--open");
        // console.log('Sidebar closed');
    }

    return (
        <div
            className={sidebar ? "sidebar sidebar--open" : "sidebar"}
            id="sidebar"
        >
            <Link to="/" onClick={closeSidebar}>
                <li>
                    <i className="fa-solid fa-house" />
                    <div>Home</div>
                </li>
            </Link>
            <Link to="/body-content" onClick={closeSidebar}>
                <li>
                    <i className="fa-solid fa-list-check" />
                    <div>Task 1</div>
                </li>
            </Link>
            <Link to="/contact" onClick={closeSidebar}>
                <li>
                    <i className="fa-solid fa-address-book" />
                    <div>Contact Us</div>
                </li>
            </Link>
            <Link to="/about" onClick={closeSidebar}>
                <li>
                    <i className="fa-solid fa-address-card" />
                    <div>About Us</div>
                </li>
            </Link>
        </div>
    );
}

export default Sidebar;
