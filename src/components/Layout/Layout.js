import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"
import "./Layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="body-container container">
        <main>{children}</main>
      </div>
      <footer>© {new Date().getFullYear()} Peter Hu</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
