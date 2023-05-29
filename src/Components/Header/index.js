import React from "react";
import Container from "react-bootstrap/Container";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
    const navData = [
        { name: "Movies", link: "./movies" },
        { name: "TV Series", link: "./series" },
        { name: "Search", link: "/search" },
    ];
    return (
        <header className="header">
            <Navbar bg="dark" expand="lg" className="nav">
                <Container>
                    <Navbar.Brand>
                        <Link to={"./"}>
                            <img
                                className="logo"
                                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                                alt="Logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            {navData.map((item) => {
                                return (
                                    <Nav key={item.name}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </Nav>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default HeaderComponents;
