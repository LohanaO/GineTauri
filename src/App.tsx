import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import Home from './pages/Home';
import About from './pages/About';
import Layout from './componets/Layout';
import LoginPage from './pages/login/LoginPage';



function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
