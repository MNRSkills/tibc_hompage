import { Routes, Route, } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Components/homePage";
import Features from "./Components/Pages/features";
import Music from "./Components/Pages/music";
import Community from "./Components/Pages/community";
import Store from "./Components/Pages/store";
import About from "./Components/Pages/about-us"
import Navbar from "./Components/Layout/navBar";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/about-us" element={<About/>}/>
      </Routes>
      {/* <Layout /> */}
    </div>
  );
}

export default App;
