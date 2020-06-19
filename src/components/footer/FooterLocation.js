import React from "react"
import styles from "./footer.module.scss"
const FooterLocation = ({ location }) => {
  const { address1, address2, city, phone, state, title, zip } = location

  return (
    <section className={styles.location}>
      <h3 className={styles.office}>{title && title.value}</h3>
      <p className={styles.address}>
        {address1 && address1.value}, {address2.value && address2.value.trim()}
        <br />
        {city && city.value}, {state.value && state.value}{" "}
        {zip.value && zip.value}
        <br />
        {phone.value && phone.value}
      </p>
    </section>
  )
}

export default FooterLocation
