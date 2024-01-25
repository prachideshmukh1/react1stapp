import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Benifit() {
    const data = [
        {
            // icon : "fa-solid fa-check",
            title: "100% project based learning",
            subtitle: "We build more than 2 real world major project in each language and don't worry that the project developement."
        },
        {
            title: "Live call support",
            subtitle: "After joining our course you will get a lot of coding problems beacuse our course is 100% project base."
        },
        {
            title: "High change of selection",
            subtitle: "If you will do hard works, And you will follow our instruction, High chance of selections."
        },
        {
            title: "video access timing",
            subtitle: "You can access our video 24*7 life time, Once you compleate your registration."
        }

    ]
    const Column = ({ demo }) => {
        return (
            <div className="d-flex">
                <div>
                    <div className="me-3 mt-2">
                        <i className="fa-solid fa-check p-3 bg-primary text-white rounded-circle"></i>
                    </div>
                </div>
                <div>              
                     <h5>{demo.title}</h5>
                    <p>{demo.subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <section className="bg-info bg-opacity-10 py-5">
            <Container>
                <Row className="bg-white">
                    <Col>
                        <h3 className="my-4">Benefits of Learning MERN Stack</h3>
                        {
                            data.map((item, index) => {
                                return (
                                    <Column demo={item} key={index} />
                                )
                            }

                            )
                        }
                    </Col>
                    <Col md>
                        <img src="soft.jpg" alt="logo" className="rounded-circle img-fluid w-75 d-block mx-auto"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}