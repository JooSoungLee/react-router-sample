import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import { useState } from 'react';





function App() {

  const[authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate == true?<UserPage></UserPage>:<Navigate to="/login"></Navigate>

  }

  return (
    <div>
      <h1>Hello React Router!!</h1>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}/>
        <Route path="/about" element={<Aboutpage></Aboutpage>}/>
        <Route path="/products" element={<ProductPage></ProductPage>}/>
        <Route path="/products/:id" element={<ProductDetailPage></ProductDetailPage>}/>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/user" element={<PrivateRoute/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

