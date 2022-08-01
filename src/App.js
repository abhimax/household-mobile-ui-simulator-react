import './App.css';
import HomePage from './pages/HomePage';
import SmartHomeRewardPage from './pages/SmartHomeRewardPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="SmartHomeRewardPage" element={<SmartHomeRewardPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;