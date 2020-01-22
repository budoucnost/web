import React from 'react'
import { NavLink as RRNavLink } from 'react-router-dom'
import { NavLink as RSNavLink } from 'reactstrap'

function NavLink(props) {
  return <RSNavLink tag={RRNavLink} activeClassName="active" {...props} />
}

export default NavLink
