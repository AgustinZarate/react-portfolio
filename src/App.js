import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
