
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from "./components/Auth/Register"
import Login from './components/Auth/Login';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
     <Navbar />
      <Routes>
       <Route Exact path="/" element={<Home /> } />
        <Route path="/login"  element={<Login />} /> 
       <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
