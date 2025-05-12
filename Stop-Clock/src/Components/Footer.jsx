import { Link  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Column 1: Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p className="mb-1">📧 prasuprasu148@gmail.com</p>
            <p className="mb-0">📞 +91 97416 05312</p>
          </div>

          {/* Column 2: Quick Links (you can customize later) */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <p className="mb-1"><Link to="/" className="text-white text-decoration-none">Home</Link></p>
            <p className="mb-1"><Link to="/about" className="text-white text-decoration-none">About</Link></p>
            <p className="mb-0"><Link to="/contact" className="text-white text-decoration-none">Contact</Link></p>
          </div>

          {/* Column 3: Credits */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase fw-bold mb-3">Made By</h6>
            <p className="mb-0">Mahadeva Prasad M</p>
            <p className="mb-0">&copy; {new Date().getFullYear()} Stopclock</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
