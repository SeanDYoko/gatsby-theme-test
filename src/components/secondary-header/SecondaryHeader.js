import React from "react";
import PropTypes from "prop-types";
import styles from "./secondary-header.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
const SecondaryHeader = ({ phone }) => {
  return (
    <section className={styles.secondaryHeader}>
      <div className="container">
        <a href={`tel: ${phone}`} className={styles.secondaryHeaderInner}>
          <p>Call NOW!!!:</p>
          <span className={styles.phoneLink}>
            {phone}**
            <div className={styles.phone}>
              <FaPhoneAlt />
            </div>
          </span>
        </a>
      </div>
    </section>
  );
};

SecondaryHeader.propTypes = {
  phone: PropTypes.string,
};

SecondaryHeader.defaultProps = {
  phone: "(888)-888-8888",
};

export default SecondaryHeader;
