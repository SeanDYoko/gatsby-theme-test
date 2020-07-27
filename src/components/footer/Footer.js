import React from "react";
import styles from "./footer.module.scss";
import { Link} from "gatsby";
import PropTypes from 'prop-types'
import SocialIcons from "../social-icons/SocialIcons";
import FooterLocation from "./FooterLocation";
import Credits from "./Credits";
const Footer = ({ social, logo, location }) => {
  const [brand] = logo; 
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.upperFooter}>
            <Link to="/">
              <img
                src={brand.url}
                alt={brand.description}
                className={styles.logo}
              />
            </Link>
            <SocialIcons icons={social} />
          </div>
          <hr className={styles.hr} />
          <FooterLocation location={location} />
          <hr className={styles.hr} />
          <Credits />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  social: PropTypes.object,
  logo: PropTypes.array,
  location: PropTypes.object
}

Footer.defaultProps = {
  social: {},
  logo: [],
  location: {}
}

export default Footer;
