import { bool, func } from "prop-types"
import React from "react"

import "./burger.scss"

const Burger = ({ open, setOpen }) => (
  <button className="burger" open={open} onClick={() => setOpen(!open)}>
    <div></div>
    <div></div>
    <div></div>
  </button>
)

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
