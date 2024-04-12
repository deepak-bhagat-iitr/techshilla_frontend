// import './App.css';
import Home from './components/Home';
import User from './components/User/User'
import Register from './components/Register';
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderMedicines from "./components/User/OrderMedicines"
import ContactForm from './components/User/ContactForm';
import Ceo from './components/Ceo/Ceo';
import Workers from './components/Ceo/Workers';
import Inventory from './components/Manager/Inventory';
import Manager from './components/Manager/Manager';
import OrderStatus from './components/Manager/OrderStatus';
import Logout from './components/Logout';
import Profile from './components/User/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user/medicines" element={<OrderMedicines/>} />
          <Route path="/user/contact" element={<ContactForm/>} />
          <Route path="/ceo" element={<Ceo/>} />
          <Route path="/ceo/workers" element={<Workers/>} />
          <Route path="/manager/inventory" element={<Inventory/>} />
          <Route path="/manager" element={<Manager/>} />
          <Route path="/manager/orderstatus" element={<OrderStatus/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/user/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
