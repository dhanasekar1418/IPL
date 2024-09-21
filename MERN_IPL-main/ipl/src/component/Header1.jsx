import React from 'react'
import '../App.css'

const Header = (props) => {
  return (
    <>
      <div className="heading">{props.name}</div>
    </>
  )
}

export default Header;