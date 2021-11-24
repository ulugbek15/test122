import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Profile from './Pages/Ptofile/Profile';

function App() {
  return (
    <>
    <Link to="/profile">Profile</Link>
    <Routes>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>
  );
}

export default App;
