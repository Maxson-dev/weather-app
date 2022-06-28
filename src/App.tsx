import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home, {coords} from './pages/Home';
import About from "./pages/About";
import Info from "./pages/Info/Info";
import Wrong from "./pages/Info/Wrong";

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />}/>
          <Route path={"/info"} element={<Info />}/>
          <Route path={"/wrong"} element={<Wrong />}/>
        </Routes>
      </>
  );
}

export default App;
