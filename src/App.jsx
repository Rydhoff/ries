import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './config/PrivateRoute';
import Home from './page/Home';
import Login from './page/Login';
import NotFound from './page/NotFound';
import Navbar from './components/Navbar';
import { isAuthenticated } from './config/AuthService';
import SendManual from './page/SendManual';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
{/*         <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<PrivateRoute><Navbar><h1 className="text-2xl font-bold text-slate-700">Device</h1></Navbar></PrivateRoute>} />
        <Route path="/database" element={<PrivateRoute><Navbar><h1 className="text-2xl font-bold text-slate-700">Database</h1></Navbar></PrivateRoute>} />
        <Route path="/autoreply" element={<PrivateRoute><Navbar><h1 className="text-2xl font-bold text-slate-700">Auto Reply</h1></Navbar></PrivateRoute>} />
        <Route path="/scheduled" element={<PrivateRoute><Navbar><h1 className="text-2xl font-bold text-slate-700">Scheduled</h1></Navbar></PrivateRoute>} />
        <Route path="/blast" element={<PrivateRoute><Navbar><h1 className="text-2xl font-bold text-slate-700">Blast</h1></Navbar></PrivateRoute>} />
        <Route path="/send-manual" element={<PrivateRoute><Navbar><SendManual /></Navbar></PrivateRoute>} />
        <Route path="/configuration" element={<PrivateRoute><Navbar><h1 className="text-2xl font-bold text-slate-700">Configuration</h1></Navbar></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
