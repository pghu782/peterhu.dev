import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai"
import headshot from "../images/headshot_small.jpg"
import Image from "react-bootstrap/Image"
function openLink(url) {
  window.open(url, "_blank")
}

const Header = ({ siteTitle }) => (
  <header>
    <div class="container d-flex justify-content-between">
      {/* <h1>{siteTitle}</h1> */}
      <Link to="/">
        <h1>
          <Image src={headshot} roundedCircle width="40px" />
          <span class="header-left__text--orange ml-2">Peter</span>
          <span class="header-left__text--black-enlarged"> G </span>
          <span class="header-left__text--orange">Hu</span>
        </h1>
      </Link>
      <div class="pt-2 mr-2">
        <button
          type="button"
          class="btn btn-circle"
          onClick={openLink.bind(this, "peterh782@gmail.com")}
        >
          <AiOutlineMail />
        </button>
        <a href="peterh782@gmail.com" class="header-email ml-1">
          peterh782@gmail.com
        </a>
        <button
          type="button"
          class="btn btn-circle ml-2"
          onClick={openLink.bind(
            this,
            "https://www.linkedin.com/in/peter-hu-p-eng-57450071/"
          )}
        >
          <AiOutlineLinkedin />
        </button>
        <button
          type="button"
          class="btn btn-circle ml-2"
          onClick={openLink.bind(this, "https://github.com/peterghu")}
        >
          <AiOutlineGithub />
        </button>
      </div>
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
