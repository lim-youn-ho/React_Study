import Main from "@Firebase/fbLogin";
import SignUp from "@Pages/signUp";


import {BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
  );
}

export default App;
