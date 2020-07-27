import React from "react";
import styles from "./mobile-header.module.scss";
import PropTypes from "prop-types";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import { Link } from "gatsby";

const MobileHeader = ({ logo, phone }) => {
  const [brand] = logo;
  return (
    <header className={styles.navBar}>
      <div className={`container ${styles.navBarInner}`}>
        <a href={`tel: ${phone}`} className={styles.phone}>
          <FaPhoneAlt />
        </a>
        <Link to="/">
          <img
            src={brand.url}
            alt={brand.description}
            className={styles.logo}
          />
        </Link>
        <FaBars className={styles.menu} />
      </div>
    </header>
  );
};

MobileHeader.propTypes = {
  logo: PropTypes.array,
  phone: PropTypes.string,
};

MobileHeader.defaultProps = {
  logo: ``,
  phone: "(888)-888-8888",
};

export default MobileHeader;
