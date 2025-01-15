// components/Navbar.js
import Link from "next/link";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/about" style={styles.navLink}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/contact" style={styles.navLink}>
            Contact
          </Link>
        </li>
        {isLoggedIn ? (
          <li style={styles.navItem}>
            <Link href="/profile" style={styles.navLink}>
              Profile
            </Link>
          </li>
        ) : (
          <li style={styles.navItem}>
            <Link href="/login" style={styles.navLink}>
              Log In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "1rem",
    backgroundColor: "#333",
    color: "#fff",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 1rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
