import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import ComingSoon from './components/ComingSoon/ComingSoon';

function App() {
  return (
    <Router>
      <Navbar />
      <Menu />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
