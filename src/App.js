import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Adduser from './users/Adduser';
import Edituser from './users/Edituser';
import Viewuser from './users/Viewuser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exect path="/" element={<Home/>}/>
        <Route exect path="/adduser" element={<Adduser/>}/>
        <Route exect path='/edituser/:id' element={<Edituser/>}/>
        <Route exect path="/viewuser/:id" element={<Viewuser/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
