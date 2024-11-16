import React from "react";
import { Link } from "react-router-dom";
function Navbar () {
    
    const styles = {
        navbar: {
          backgroundColor: '#333',
          padding: '10px',
          textAlign: 'center',
        },
        navList: {
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
        },
        navItem: {
          margin: '0 15px',
        },
        link: {
          color: '#fff',
          textDecoration: 'none',
          fontSize: '18px',
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