import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Add_team from './components/Add_team';
import View_teams from './components/View_teams';
import Edit from './components/Edit';
import Statistics from './components/Statistics';
import Avg from './components/Avg';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-teams" element={<View_teams />} />
        <Route path="/add-team" element={<Add_team />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/avg" element={<Avg />} />
      </Routes>
    </div>
  );
}

export default App;
