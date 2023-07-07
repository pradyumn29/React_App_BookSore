import logo from './logo.svg';
import './App.css';
import { Navigate, Route,Routes } from 'react-router-dom';
import FruitForm from './Component/FruitForm';
import FruitTable from './Component/FruitTable';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/FruitTable"/>}></Route> 
        <Route path="/FruitTable" element={<FruitTable/>}></Route>
        <Route path="/FruitForm" element={<FruitForm/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
