import React from "react"
import { bool } from "prop-types"
import "./mobile-menu.scss"
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai"

const MobileMenu = ({ open }) => {
  function openLink(url) {
    const otherWindow = window.open(url)
    otherWindow.opener = null
  }

  let navHidden = open ? "" : "hidden"

  return (
    <nav open={open} className={navHidden}>
      <div className="row">
        <button type="button" className="btn btn-circle">
          <AiOutlineMail />
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
        <a href="peterh782@gmail.com">peterh782@gmail.com</a>
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
    </nav>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu
