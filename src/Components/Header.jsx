import React from 'react'

function Header({clickSidebar, sidebar}) {
  return (
    <div className="header">
        <i className={sidebar? 'icon fa fa-times' : 'icon--open fa-solid fa-bars'} onClick={clickSidebar} id='sidebar-button'></i>
        <div className="heading">Global Logic</div>
    </div>
  )
}

export default Header