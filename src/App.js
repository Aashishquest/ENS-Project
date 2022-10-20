import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { HomePage } from './components/HomePage';
import { SetENSName } from './components/SetENSName';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/setName" element={<SetENSName/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
