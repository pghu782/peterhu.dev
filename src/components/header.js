import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai"
import headshot from "../images/headshot_small.jpg"
import Image from "react-bootstrap/Image"
import Burger from "./burger/burger"
import MobileMenu from "./mobile-menu/mobile-menu"
import { Desktop, Mobile } from "./media-query/media-query"
import { useOnClickOutside } from "../utils/hooks"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  function openLink(url) {
    const otherWindow = window.open(url)
    otherWindow.opener = null
  }

  return (
    <header>
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <h1>
            <Image src={headshot} roundedCircle width="40px" />
            <span className="header-left__text--orange ml-2">Peter</span>
            <span className="header-left__text--black-enlarged"> G </span>
            <span className="header-left__text--orange">Hu</span>
          </h1>
        </Link>
        {/* Side Bar - Desktop */}
        <Desktop>
          <div className="pt-2 mr-2">
            <button
              type="button"
              className="btn btn-circle"
              onClick={openLink.bind(this, "peterh782@gmail.com")}
            >
              <AiOutlineMail />
            </button>
            <a href="peterh782@gmail.com" className="header-email ml-1">
              peterh782@gmail.com
            </a>
            <button
              type="button"
              className="btn btn-circle ml-2"
              onClick={openLink.bind(
                this,
                "https://www.linkedin.com/in/peter-hu-p-eng-57450071/"
              )}
            >
              <AiOutlineLinkedin />
            </button>
            <button
              type="button"
              className="btn btn-circle ml-2"
              onClick={openLink.bind(this, "https://github.com/peterghu")}
            >
              <AiOutlineGithub />
            </button>
          </div>
        </Desktop>
        <Mobile>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen}></Burger>
            <MobileMenu open={open} setOpen={setOpen}></MobileMenu>
          </div>
        </Mobile>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
