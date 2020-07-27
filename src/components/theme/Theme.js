import React from "react"
import { Helmet } from "react-helmet"
const Theme = ({ primary, secondary, accent }) => {
  return (
    <Helmet>
      <style>{`:root{--primary: ${primary.value}; --secondary: ${secondary.value}; --accent: ${accent.value}}`}</style>
    </Helmet>
  )
}

export default Theme
