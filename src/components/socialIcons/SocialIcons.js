import React from "react"
import { FaFacebookF, FaYelp, FaGoogle, FaYoutube } from "react-icons/fa"
import styles from "./social.module.scss"
const SocialIcons = ({ icons }) => {
  const { facebook, google, yelp, youtube } = icons

  return (
    <section className={styles.socialWrapper}>
      {facebook.value && (
        <a href={facebook.value} className={styles.socialIcon}>
          <FaFacebookF />
        </a>
      )}
      {google.value && (
        <a href={google.value} className={styles.socialIcon}>
          <FaGoogle />
        </a>
      )}
      {yelp.value && (
        <a href={yelp.value} className={styles.socialIcon}>
          <FaYelp />
        </a>
      )}
      {youtube.value && (
        <a href={youtube.value} className={styles.socialIcon}>
          <FaYoutube />
        </a>
      )}
    </section>
  )
}

export default SocialIcons
