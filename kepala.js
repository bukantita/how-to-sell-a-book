import React from 'react';
import { Link } from "react-router-dom";

const styles = {
    navbar: {
      justifyContent: "center",
      width: "100%",
      margin: "auto",
      display: "flex",
      lineHeight: "80px",
      position: "sticky",
      top: "0",
      background: "#e6fdd7",
      zIndex: "100",
    },
    navLinks: {
      display: "flex",
      gap: "50px",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "16px",
      fontWeight: "bold",
    }
  };
  
  class Header extends React.Component {
    render() {
      return (
        <div style={styles.navbar}>
  
          <div style={styles.navLinks}>
            <Link to="/" style={styles.link}>
              Main Event
            </Link>
            <Link to="/about me" style={styles.link}>
              About Me
            </Link>
            <Link to="/projects" style={styles.link}>
              Projects
            </Link>
            <Link to="/contact us" style={styles.link}>
              Contact ME
            </Link>
            <Link to="/gallery" style={styles.link}>
              Gallery
            </Link>
          </div>
        </div>
      );
    }
  }
  
  export default Header;