// App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbarcomponent from './Components/NavBar';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbarcomponent />
      <Menu />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
