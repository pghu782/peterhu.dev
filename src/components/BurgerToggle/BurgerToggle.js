import { bool, func } from "prop-types"
import React from "react"

import "./BurgerToggle.scss"

const BurgerToggle = ({ open, setOpen }) => (
  <button className="burger" open={open} onClick={() => setOpen(!open)}>
    <div></div>
    <div></div>
    <div></div>
  </button>
)

BurgerToggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default BurgerToggle
