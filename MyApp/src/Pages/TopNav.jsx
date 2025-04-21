import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const TopNav=()=>{
    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand as={Link}  style={{marginRight:"300px",fontSize:"35px"}}>Navbar</Navbar.Brand >
          <Nav className="me-auto" style={{display:"flex",gap:"50px",fontSize:"20px"}}>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="/display">Display</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            <Nav.Link as={Link} to="/update">Update</Nav.Link>
            <Nav.Link as={Link} to="/search2">Search2</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
        
        </>
    )
}
export default TopNav;