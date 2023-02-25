import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Add from './pages/employees/Add';
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/add" element = {<Add/>} />

        <Route path="*" element = {<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
