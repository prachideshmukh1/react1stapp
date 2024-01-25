import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Service.css';

function Service() {
    const data = [
        {
            icon : "fa-solid fa-house-chimney",
            title: "BUSINESS MODEL",
            subtitle: "You can also use this space for other purposes where the information is best presented as more teaser toother individualized pages."
        },
        {
            icon : "fa-solid fa-file-pen",
            title: "BUSINESS EXECUTION",
            subtitle: "You can also use this space for other purposes where the information is best presented as more teaser toother individualized pages."
        },
        {
            icon : "fa-solid fa-laptop",
            title: "BUSINESS MONITORING",
            subtitle: "You can also use this space for other purposes where the information is best presented as more teaser toother individualized pages."
        }
    ];
    const Column = ({ data }) => {
        return (
            <>
                <Col md className="rounded-5 bg-success p-5 mx-4">
                    <div className="icon-box">
                        <i className={data.icon}></i>
                    </div>
                    <h4>{data.title}</h4>
                    <p className='fw-bold'>{data.subtitle}</p>
                </Col>
            </>
        )
    }

    return (
        <section className="service bg-success py-5 text-white bg-opacity-50">
            <Container>
                <Row>
                    <h1 className="text-success">Our Service</h1>
                    <p className="col-lg-8">
                        Share your services or product offerings here. Present them as simple headers that can lead out to their pages where you can expound on them further. You can alsouse this space for other purpose where the information is best presented as mereteasers to other individualizatized pages.
                    </p>
                </Row>
                <Row>
                    {
                        data.map((item, index) => {
                            return (
                                <Column data={item} key={index} />
                            )
                        }

                        )
                    }
                </Row>
            </Container>
        </section>
    )
}
export default Service;