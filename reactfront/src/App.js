import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CompShowMessages from './message/ShowMessage.js';
import CompCreateMessage from './message/CreateMessage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowMessages />} />
          <Route path='/create' element={<CompCreateMessage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
