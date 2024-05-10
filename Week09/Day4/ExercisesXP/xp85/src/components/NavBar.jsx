import {
    NavLink
} from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = (props) =>{
return(
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav>
            <NavLink to="/"  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "white",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>Home</NavLink>
            <NavLink to="/profile"  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "white",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>Profile</NavLink>
            <NavLink to="/shop"  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "white",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>Shop</NavLink>
          </Nav>
        </Container>
      </Navbar>
)

}

export default NavBar