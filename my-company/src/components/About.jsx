import React from 'react'

function About() {
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
              <div style={{ padding: '20px' }}>
                <h1>About Us</h1>
                <p>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
              </div>
            );
          }
       
          export default About;
