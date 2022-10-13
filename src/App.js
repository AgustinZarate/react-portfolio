import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <>
    <Sidebar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
