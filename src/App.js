import LogIn from "@Firebase/fbLogin";
import Header from "@Components/Header";
import Main from "@Pages/main";


import {BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";


function App() {

  return (
      <Router>
        <Header />
        <Main/>
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </Router>
  );
}

export default App;
