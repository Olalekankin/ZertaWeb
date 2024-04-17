import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './component/partial/Navbar';
import Footer from './component/partial/Footer';
import { Home } from './pages';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Career from './pages/Career';
import CareerForm from './pages/CareerForm';

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/hire" element={<CareerForm />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};


export default App
