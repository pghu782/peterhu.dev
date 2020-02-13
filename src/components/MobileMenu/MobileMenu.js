import React from "react"
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
        <button type="button" className="btn btn-circle">
          <AiOutlineCode />
        </button>
        <a href="/projects">Projects</a>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-circle"
          onClick={openLink.bind(this, "peterh782@gmail.com")}
        >
          <AiOutlineMail />
        </button>
        <a href="peterh782@gmail.com">Email</a>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-circle"
          onClick={openLink.bind(
            this,
            "https://www.linkedin.com/in/peter-hu-p-eng-57450071/"
          )}
        >
          <AiOutlineLinkedin />
        </button>
        <a href="https://www.linkedin.com/in/peter-hu-p-eng-57450071/">
          LinkedIn
        </a>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-circle"
          onClick={openLink.bind(this, "https://github.com/peterghu")}
        >
          <AiOutlineGithub />
        </button>
        <a href="https://github.com/peterghu">CODE</a>
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu
