
import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
 
} from "react-router-dom";
import { About } from './Components/About';
import {Completed} from './Components/Completed';
import {Home} from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Final-Board</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as ={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to ="/about">About</Nav.Link>
            <Nav.Link as={Link} to ="/completed">Completed</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

    </>
 <div>
  <Routes>
    <Route path="/about" element ={<About/>}/>
    <Route path="/completed" element ={<Completed/>}/>
    <Route path="/" element ={<Home/>}/>
  </Routes>
 </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
