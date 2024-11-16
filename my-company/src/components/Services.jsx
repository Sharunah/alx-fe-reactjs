import React from 'react'

function Services() {
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
    <h1>Our Services</h1>
    <ul>
      <li>Technology Consulting</li>
      <li>Market Analysis</li>
      <li>Product Development</li>
    </ul>
  </div>
  )
}

export default Services
