import { Routes, Route, } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Components/homePage";
import Navbar from "./Components/Layout/navBar";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
      </Routes>
      {/* <Layout /> */}
    </div>
  );
}

export default App;
