import React from 'react'

export default function Backdrop({sidebar, clickSidebar}) {
  return (
    <div className={sidebar? 'backdrop backdrop--open': 'backdrop'} onClick={clickSidebar} id='backdrop'></div>
  )
}
