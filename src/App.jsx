import './assets/style/login3.css';
import './assets/style/plugins.bundle.css';
import './assets/style/style.bundle.css';
import Login from './Auth/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function DashboardLayout() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


