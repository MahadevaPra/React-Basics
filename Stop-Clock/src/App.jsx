import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import PaP from './Components/PrivacyandPolicy';
import TaC from './Components/TermsandConditions';
import Footer from './Components/Footer'
import Clock from './Components/Clock';
import NoPage from './Components/Nopage';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main layout with navbar */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PrivacyandPolicy" element={<PaP />} />
          <Route path="/TermsandConditions" element={<TaC />} />
        </Route>
        <Route path='/stopclock' element={<Clock />}/>
        <Route path='*' element={<NoPage />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
