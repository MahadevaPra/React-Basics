import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'; // Import the custom CSS

const TermsAndConditions = () => {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Terms and Conditions</h2>
          <p className="card-text">
            <strong>Effective Date:</strong> [Insert Date]
          </p>
          <p>
            Welcome to the Stopclock Website. By using our services, you agree to comply with and be bound by the following Terms and Conditions.
          </p>

          <h4>1. Acceptance of Terms</h4>
          <p>
            By accessing or using our website, you agree to abide by these Terms and Conditions and any additional terms that apply to specific features or services of the website.
          </p>

          <h4>2. Use of the Website</h4>
          <p>
            You are granted a limited, non-exclusive license to use our stopwatch tool for personal, non-commercial purposes only. You agree not to:
            <ul>
              <li>Copy, modify, or distribute any content from this website without permission.</li>
              <li>Engage in any conduct that disrupts the operation of the website.</li>
            </ul>
          </p>

          <h4>3. Intellectual Property</h4>
          <p>
            The content, design, and branding of the Stopclock Website are owned by us or our licensors. You may not use our intellectual property for any commercial purpose without explicit permission.
          </p>

          <h4>4. Limitation of Liability</h4>
          <p>
            We do not guarantee that the website will be error-free or uninterrupted. We are not responsible for any loss, damage, or inconvenience resulting from the use of the website, including downtime or malfunction.
          </p>

          <h4>5. Disclaimer of Warranties</h4>
          <p>
            The Stopclock Website is provided "as is" without any warranties, express or implied. We do not warrant the accuracy, completeness, or reliability of any content or functionality provided by the website.
          </p>

          <h4>6. User Responsibilities</h4>
          <p>
            You are responsible for using the website and its features correctly. You agree to use the website in accordance with applicable laws and regulations.
          </p>

          <h4>7. Third-Party Links</h4>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites.
          </p>

          <h4>8. Privacy and Data Collection</h4>
          <p>
            Please refer to our <Link to="/PrivacyandPolicy" className="text-primary">Privacy Policy</Link> for details on how we handle your data.
          </p>

          <h4>9. Termination</h4>
          <p>
            We may suspend or terminate your access to the website at our discretion, particularly if you violate any of these Terms and Conditions.
          </p>

          <h4>10. Changes to the Terms</h4>
          <p>
            We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page with a revised "Effective Date."
          </p>

          <h4>11. Governing Law</h4>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State].
          </p>

          <h4>12. Contact</h4>
          <p>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at{' '}
            <a href="mailto:prasuprasu148@gmail.com" className="text-primary">prasuprasu148@gmail.com</a>.
          </p>
        </div>
      </div>

      <footer>
        <p>© 2025 Stopclock Website</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
