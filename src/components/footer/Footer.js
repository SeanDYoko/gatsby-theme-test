import React from "react";
import styles from "./footer.module.scss";
import { Link, useStaticQuery, graphql } from "gatsby";
import SocialIcons from "../socialIcons/SocialIcons";
import FooterLocation from "./FooterLocation";
import Credits from "./Credits";
const Footer = ({ social, logo }) => {
  const [brand] = logo;
  const location = useStaticQuery(getLocation).location.elements;

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

const getLocation = graphql`
  query getLocation {
    location: kontentItemLocation(
      elements: { featured: { value: { elemMatch: { name: { eq: "Yes" } } } } }
    ) {
      elements {
        title: location_title {
          value
        }
        address1 {
          value
        }
        address2 {
          value
        }
        city {
          value
        }
        state {
          value
        }
        zip {
          value
        }
        phone {
          value
        }
      }
    }
  }
`;

export default Footer;
