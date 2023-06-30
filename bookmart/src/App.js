import logo from './logo.svg';
import './App.css';

import BookForm from './component/BookForm';
import BookTable from './component/BookTable';
import {Routes,Route,Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Navigate replace to="/booktable"></Navigate>}></Route>
        <Route path="/booktable" element={<BookTable/>}></Route>
        <Route path="/bookform" element={<BookForm/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
