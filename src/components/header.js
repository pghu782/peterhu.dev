// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="container">
      {/* <h1>{siteTitle}</h1> */}
      <h1>
        <span class="header--orange">Peter</span>
        <span class="header--black-enlarged"> G. </span>
        <span class="header--orange">Hu</span>
      </h1>
      {/* put icons here */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
