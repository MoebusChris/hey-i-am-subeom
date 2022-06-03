import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[{ name: `description`, content: description }]}
    ></Helmet>
  )
}

export default SEO
