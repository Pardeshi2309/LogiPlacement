import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import Resume from './pages/Resume';
import Aboutus from './pages/Aboutus';
import Signup from './pages/Signup';
import Aptitude from './pages/Aptitude';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/aptitude" element={<Aptitude/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/prediction" element={<Prediction/>}/>
          

          
        </Routes>
      </Router>
    </>

  );
}

export default App;
