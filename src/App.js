import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { HomePage } from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
