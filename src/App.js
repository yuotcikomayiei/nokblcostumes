import './App.css';
import Footer from './components/FooterSection/Footer';
import Header from './components/HeaderSection/Header';
import Home from './components/HeroSection/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/AboutSection/About';
import Contact from './pages/ContactUs/Contact';
import Blog from './pages/BlogSection/Blog';
import Marquee from './pages/marqueSection/marquee';
import Services from './pages/ServiceSection/Services';



function App() {
  return (
    <div>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Marquee />
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
