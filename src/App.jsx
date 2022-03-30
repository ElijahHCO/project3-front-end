import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Ski from './Ski';
import Snowboard from './Snowboard';

function App() {
  return (
    <Router>
    <div className="App">
      <h1 className="Header">SnowShelves</h1>
    <Nav />
      <Routes>
        <Route path="/ski" element={<Ski/>} />
        <Route path="/snowboard" element={<Snowboard/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
