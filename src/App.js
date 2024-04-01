import LogIn from "@Firebase/fbLogin";
import Header from "@Components/Header";
import Main from "@Pages/Main";
import Footer from "@Components/Footer";
import "@Styles/App.css"


import {BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import {useState} from "react";


function App() {

    return (
      <Router>
        <Header  />
        <Main />
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Main" element={<Main />} />
        </Routes>

          <footer>
              <Footer/>
          </footer>
      </Router>
  );
}

export default App;
