import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

import { BsFacebook, BsGithub } from "react-icons/bs";
const FooterComponent = () => {
    return (
        <>
            <footer className="myFooter">
                <Container>
                    <Row>
                        <Col className="">
                            <h3 className="head_3">Contact Me </h3>
                            <ul className="socialIconsList">
                                <li>
                                    <a
                                        rel="noreferrer"
                                        href="https://www.facebook.com/profile.php?id=100041376619569"
                                        target="_blank"
                                    >
                                        <BsFacebook />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        rel="noreferrer"
                                        href="https://github.com/vandao99"
                                        target="_blank"
                                    >
                                        <BsGithub />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col className="col-12">
                            <div className="footerCopyright">
                                <small>© Van Dao Fresher ReactJs</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default FooterComponent;
