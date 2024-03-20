import LogIn from "@Firebase/fbLogin";
import SignUp from "@Pages/signUp";
import Header from "@Components/Header";


import {BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";


function App() {

  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
  );
}

export default App;
