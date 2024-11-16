import React from 'react'
import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State to handle form submission (for demonstration purposes)
  const [submitted, setSubmitted] = useState(false);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload on form submit
    setSubmitted(true);  // Set submitted state to true
  };

  // Reset form fields
  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };
    const styles = {
        container: {
            padding: '50px 20px',
            textAlign: 'center',
            backgroundColor: '#f1f1f1',
          },
          heading: {
            fontSize: '32px',
            color: '#333',
            marginBottom: '20px',
          },
          paragraph: {
            fontSize: '18px',
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '20px',
          },
          list: {
            listStyleType: 'none',
            padding: 0,
            fontSize: '18px',
            color: '#555',
          },
          listItem: {
            marginBottom: '10px',
          },
        };
  return (
    <div style={styles.container}>
              <h1 style={styles.heading}>Contact Us</h1>
        
              {/* Contact form */}
              <form style={styles.form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={styles.textarea}
                />
                <button
                  type="submit"
                  style={styles.button}
                  onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                  onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                >
                  Submit
                </button>
              </form>
        
              {/* Display form data after submission */}
              {submitted && (
                <div style={styles.formData}>
                  <h2 style={styles.formDataHeading}>Form Submitted</h2>
                  <p style={styles.formDataText}><strong>Name:</strong> {name}</p>
                  <p style={styles.formDataText}><strong>Email:</strong> {email}</p>
                  <p style={styles.formDataText}><strong>Message:</strong> {message}</p>
                  <button
                    style={styles.button}
                    onClick={handleReset}
                  >
                    Reset Form
                  </button>
                </div>
              )}
            </div>
      

  )
}

export default Contact
