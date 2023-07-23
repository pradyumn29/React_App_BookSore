import logo from './logo.svg';
import './App.css';
import {Navigate,Route,Routes} from 'react-router-dom'
import PaintForm from './component/PaintForm';
import PaintTable from './component/PaintTable';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/PaintTable"/>}></Route> 
        <Route path="/PaintTable" element={<PaintTable/>}></Route>
        <Route path="/PaintForm" element={<PaintForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
