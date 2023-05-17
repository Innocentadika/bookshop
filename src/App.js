import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loarder from './components/Loarder/Loarder';
import Category from './components/Category/Categories';
import Secondary from './components/Books/Secondary/Secodary';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Loarder/>} />
        <Route path='/category' element={<Category/>}/>
        <Route path='/secondary' element={<Secondary/>}/>

      </Routes>
    </div>
  );
}

export default App;
