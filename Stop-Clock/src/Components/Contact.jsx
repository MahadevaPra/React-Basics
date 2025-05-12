// Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">📇 Contact Information</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="me-2">👤</span>
              <strong>Name:</strong> Mahadeva Prasad M
            </li>
            <li className="list-group-item">
              <span className="me-2">✉️</span>
              <strong>Email:</strong>{' '}
              <a href="mailto:prasuprasu148@gmail.com" className="text-decoration-none text-primary">
                prasuprasu148@gmail.com
              </a>
            </li>
            <li className="list-group-item">
              <span className="me-2">📞</span>
              <strong>Phone:</strong>{' '}
              <a href="tel:+919741605312" className="text-decoration-none text-primary">
                +91 9741605312
              </a>
            </li>
            <li className="list-group-item">
              <span className="me-2">📍</span>
              <strong>Address:</strong> Triveni Circle, Mysuru, Karnataka - 570019
            </li>
            <li className="list-group-item">
              <span className="me-2">🔗</span>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/mahadeva-prasad-m-090047265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                View Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
