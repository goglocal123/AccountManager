import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AccountManager from './components/AccountManager';

function App() {
  return (
    <div className='App'>
      <AccountManager />
      {/* <Login /> */}
      {/* <Routes>
        <Route path='/profile' exact element={<Sidebar />} />
      </Routes> */}
    </div>
  );
}

export default App;
