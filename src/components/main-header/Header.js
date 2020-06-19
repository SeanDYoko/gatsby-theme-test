import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from "./header.module.scss";
import { FaBars } from "react-icons/fa";

const Header = ({ logo, sticky }) => {
  console.log(sticky);

  const [brand] = logo;
  return (
    <header
      className={
        sticky ? `${styles.navBar} ${styles.navBarSticky} ` : styles.navBar
      }
    >
      <div className={`container ${styles.navBarInner}`}>
        <Link to="/">
          <img
            src={brand.url}
            alt={brand.description}
            className={styles.logo}
          />
        </Link>
        Nav links go here. 
        <FaBars className={styles.menu} />
      </div>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.object,
  sticky: PropTypes.bool,
};

Header.defaultProps = {
  logo: ``,
  sticky: false,
};

export default Header;
