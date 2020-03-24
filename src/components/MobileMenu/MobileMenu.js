import React from "react"
import { Link } from "gatsby"
import { bool } from "prop-types"
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCode,
} from "react-icons/ai"

import "./MobileMenu.scss"

const MobileMenu = ({ open }) => {
  function openLink(url) {
    const otherWindow = window.open(url)
    otherWindow.opener = null
  }

  let menuClasses = "mobileMenu"
  if (!open) menuClasses = menuClasses + " hidden"

  return (
    <div open={open} className={menuClasses}>
      <div className="row">
        <Link to="/projects/" className="m-0 p-0">
          <button type="button" className="btn btn-circle">
            <AiOutlineCode />
          </button>
        </Link>
        <Link to="/projects/">Projects</Link>
      </div>
      <div className="row">
        <a href="mailto:peterh782@gmail.com" className="m-0 p-0">
          <button type="button" className="btn btn-circle">
            <AiOutlineMail />
          </button>
        </a>
        <a href="mailto:peterh782@gmail.com">Email</a>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-circle"
          onClick={openLink.bind(
            this,
            "https://www.linkedin.com/in/peter-hu-57450071/"
          )}
        >
          <AiOutlineLinkedin />
        </button>
        <a href="https://www.linkedin.com/in/peter-hu-57450071/">LinkedIn</a>
      </div>
      <div className="row">
        <a href="https://github.com/peterghu" className="m-0 p-0">
          <button type="button" className="btn btn-circle">
            <AiOutlineGithub />
          </button>
        </a>
        <a href="https://github.com/peterghu">GITHUB</a>
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu
