import React from "react";
import { Link } from "react-router-dom";
function Navbar () {
    
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
        <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.link}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/services" style={styles.link}>Services</Link> {/* New "Services" link */}
          </li>
        </ul>
      </nav>
    )
}
export default Navbar