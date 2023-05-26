import React from 'react'
import { useState } from 'react'

function Toolbar({openSidebar, toggleHeader}) {

  return (
    <div className="toolbar">
        <i className="icon fa-solid fa-bars" onClick={openSidebar} onMouseOver={toggleHeader}></i>
        <div className="header">Global Logic</div>
    </div>
  )
}

export default Toolbar