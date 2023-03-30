import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateService from "./pages/CreateService";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createservice">Create A Service</Link>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createservice" element={<CreateService />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
