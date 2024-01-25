import React from "react";
import './Component.css';
import { Col, Container, Row } from "react-bootstrap";

function Component() {
    const data = [{
        icon: "fa-solid fa-house fs-1",
        title: "Full Course",
        subtitle: "24 Houre Support"
    },
    {
        icon: "fa-solid fa-file-pen",
        title: "Front End",
        subtitle: "24 Houre Support"
    },
    {
        icon: "fa-solid fa-laptop",
        title: "React js",
        subtitle: "With Next JS"
    },
    {
        icon: "fa-brands fa-node-js",
        title: "Java Full Stack",
        subtitle: "24 Houre Support"
    },
    {
        icon: "fa-brands fa-google",
        title: "Python",
        subtitle: "With ML & AI"
    }
    ];

    const Column = ({ data }) => {
        return (
            <>
                <Col className='text-center py-4 px-5 shadow border my-3 mx-2 rounded bg-white'>
                    <div className="icon-box">
                        <i className={data.icon}></i>
                    </div>
                    <h2>{data.title}</h2>
                    <p className="fw-bold">{data.subtitle}</p>

                </Col>
            </>
        );
    }
    return (
        <section className="Comp bg-white">
        <Container className="container">
            <Row>
                {
                    data.map((item, index) => {
                        return <Column data={item} key={index} />

                        
                    })
                }


            </Row>
        </Container>
        </section>
    )
}

export default Component;