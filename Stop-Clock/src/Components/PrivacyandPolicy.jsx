import React from 'react';
import './styles.css'; // Import the custom CSS

const PrivacyPolicy = () => {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Privacy Policy</h2>
          <p className="card-text">
            <strong>Effective Date:</strong> [Insert Date]
          </p>
          <p>
            This website ("Stopclock Website") provides a simple stopwatch tool to help users track time effectively. Your privacy is important to us. This Privacy Policy outlines how we handle information on our website.
          </p>

          <h4>1. Information Collection</h4>
          <p>
            We do not collect any personal information such as names, email addresses, or phone numbers.
          </p>

          <h4>2. Cookies and Analytics</h4>
          <p>
            We use cookies to enhance user experience and store basic preferences (e.g., timer state). We may also use analytics tools (such as Google Analytics) to understand how users interact with the website in an anonymous and aggregated manner.
          </p>
          <p>
            For more information on how Google collects and processes your data, please refer to Google's Privacy Policy here: 
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
          </p>

          <h4>3. Third-party Services</h4>
          <p>
            If we use analytics or third-party tools, they may collect anonymous data. Please refer to their privacy policies for more information.
          </p>

          <h4>4. Data Security</h4>
          <p>
            We take reasonable measures to protect our website and any non-personal data collected.
          </p>

          <h4>5. Changes to the Policy</h4>
          <p>
            We reserve the right to update this Privacy Policy. The updated version will be posted on this page with a revised "Effective Date."
          </p>

          <h4>6. Contact</h4>
          <p>
            For questions about this policy, contact us at{' '}
            <a href="mailto:prasuprasu148@gmail.com">prasuprasu148@gmail.com</a>.
          </p>
        </div>
      </div>

      <footer>
        <p>© 2025 Stopclock Website</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
