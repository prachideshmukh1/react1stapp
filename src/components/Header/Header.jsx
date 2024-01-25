import React from "react";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import { Image } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import menu from '../../menu-json-api/menu.json';
import company from '../../Company-Deatils/company.json';

// function Subhead(){
//     return(
//         <div>
//             <h3>Subhead</h3>
//         </div>
//     )
// }
function Mainmenu({demo}){
    return(
        <>
         <Link to={demo.link} className={demo.isButton ? "btn btn-primary" : "nav-link"}>
            {demo.lable}</Link>
        </>
    );
}

function DropdownMenu({demo}){
    // console.log(demo)
    return(
        <NavDropdown title={demo.lable} id="basic-nav-dropdown">
            {
               // console.log(demo)
               demo.DropdownMenu.map((data,index)=>{
               return<Mainmenu demo={data} key={index}/>
               })
            }
      </NavDropdown>
        
        
    );
}

function Header() {
    // console.log(company);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <Link to="/" className="navbar-brand">
                        <Image src={company.logo} width={35} className="me-2" />
                        {company.name}
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                           
                            {
                                menu.map((item, index) => {
                                    if(item.isDropdown){
                                        return<DropdownMenu demo={item} key={index}/>
                                    }
                                    return <Mainmenu demo={item} key={index}/>
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
}

export default Header;
