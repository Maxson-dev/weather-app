import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home, {coords} from './routes/Home';
import About from "./routes/About";
import Info from "./routes/Info/Info";
import Wrong from "./routes/Wrong";

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
