import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { TbFilePencil } from "react-icons/tb";
import { RxGithubLogo } from "react-icons/rx";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Navbar(props) {
    return (
        <>
            <div class="d-flex justify-content-around align-items-center mt-4">
                <div>
                    <Link
                        className="navbar-brand"
                        to=""
                        style={{
                            fontWeight: "normal",
                            fontSize: "2rem",
                            color: `${props.mode === "light" ? "#674188" : "#FFFBF5"}`,
                        }}
                    >
                        <TbFilePencil style={{ marginTop: "-4px", marginRight: "-4px" }} />
                        {props.title}
                    </Link>
                </div>
                <div className="">
                    <Link to="about">
                        <BsFillInfoCircleFill style={{ marginRight: "5px" }} color={props.mode === "light" ? "black" : "white"} size={25}  />
                    </Link>
                    <a style={{ marginRight: "20px" }} href="https://github.com/Akshat12210/TextUtilsReact" target="_blank" rel="noopener noreferrer"><RxGithubLogo color={props.mode === "light" ? "black" : "white"} size={25} /></a>
                    <button
                        onClick={() => props.toggle()}
                        style={{
                            border: "none",
                            borderRadius: 5,
                            padding: 8,
                            backgroundColor: `${props.mode === "light" ? "#C3ACD0" : "#FFF2F9"}`,
                        }}
                    >
                        {props.mode === "dark" ? <FiSun size={20} /> : <FiMoon size={20} fill="white" color="white" />}
                    </button>
                </div>
            </div>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: "Idhar title aayega",
};
