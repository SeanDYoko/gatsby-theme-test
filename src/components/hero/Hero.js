import React from "react";
import BgImg from "gatsby-background-image";
import styles from "./hero.module.scss";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import { Link } from "gatsby";
import { AppContext } from "../context/context";
const Hero = ({ banner }) => {
  const { size } = React.useContext(AppContext);

  const { background, title, short_text: subTitle, cta_text } = banner;
  const bgOverlay = [
    background.value[0].fluid,
    `linear-gradient(rgba(68,68,68,0.75), rgba(68,68,68,0.75))`,
  ].reverse();
  if (size < 767) {
    return (
      <BgImg fluid={bgOverlay} className={styles.hero}>
        <section className={`container ${styles.bannerContent}`}>
          <RichTextElement value={title.value} />
          <RichTextElement value={subTitle.value} className />
          <Link to="/" className="button primary-button">
            {cta_text.value}
          </Link>
        </section>
      </BgImg>
    );
  } else {
    return (
      <BgImg fluid={background.value[0].fluid} className={styles.hero}>
        <section className={`container ${styles.bannerContent}`}>
          <RichTextElement value={title.value} />
          <RichTextElement value={subTitle.value} className />
          <Link to="/" className="button primary-button">
            {cta_text.value}
          </Link>
        </section>
      </BgImg>
    );
  }
};

export default Hero;
