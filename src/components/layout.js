import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import SecondaryHeader from "./secondary-header/SecondaryHeader";
import MobileHeader from "./mobile-header/MobileHeader";
import Header from "./main-header/Header";
import Footer from "./footer/Footer";
import Theme from "./Theme";
import { AppContext } from "../assets/context/context";

const Layout = ({ children }) => {
  const { size, height } = React.useContext(AppContext);
  const data = useStaticQuery(getData);
  const { logo } = data.settings.elements.main_logo;
  const { footerLogo } = data.settings.elements.footer;
  const { primary, secondary, accent } = data.settings.elements;

  const { phone } = data.location.elements.phone;
  const social = data.social.elements;
  console.log(height);

  if (size < 768) {
    return (
      <div className="wrapper">
        <Theme primary={primary} secondary={secondary} accent={accent} />
        <div className="content">
          <MobileHeader logo={logo} phone={phone} />
          <main className="page-content">{children}</main>
        </div>
        <Footer social={social} logo={footerLogo} />
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <Theme primary={primary} secondary={secondary} accent={accent} />
        <div className="content">
          <SecondaryHeader phone={phone} />
          {height > 66 ? (
            <Header logo={logo} sticky={true} />
          ) : (
            <Header logo={logo} />
          )}
          <main className="page-content">{children}</main>
        </div>
        <Footer social={social} logo={footerLogo} />
      </div>
    );
  }
};

const getData = graphql`
  query getHeader {
    settings: kontentItemSettings {
      elements {
        primary: primary_color {
          value
        }
        secondary: secondary_color {
          value
        }
        accent: accent_color {
          value
        }
        main_logo {
          logo: value {
            url
            description
          }
        }
        footer: footer_logo {
          footerLogo: value {
            url
            description
          }
        }
      }
    }
    location: kontentItemLocation(
      elements: { featured: { value: { elemMatch: { name: { eq: "Yes" } } } } }
    ) {
      elements {
        phone {
          phone: value
        }
      }
    }
    social: kontentItemSocialLinks {
      elements {
        angies: angies_list_url {
          value
        }
        facebook: facebook_url {
          value
        }
        google: google_url {
          value
        }
        yelp: yelp_url {
          value
        }
        youtube: youtube_url {
          value
        }
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
