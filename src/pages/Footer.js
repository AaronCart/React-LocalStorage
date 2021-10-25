import React from "react";

export default function Footer() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark text-white fixed-bottom py-1">
                <ul className="navbar-nav mr-auto mx-5 px-5">
                    <li className="nav-item">
                        COSC2758
                    </li>
                </ul>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        Aaron Cartledge
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-5 px-5">
                        s3840848
                    </li>
                </ul>
                {/* Course Code, My Name & Student Number will be displayed in the footer at all times */}
            </nav>
    )
}