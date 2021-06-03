import React from 'react'

import './topMenu.css'

const TopMenu = ({ setItemsShown }) => {
  return (
    <div className="header-menu">
      <button
        id="photos"
        className="header-menu-item"
        onClick={e => setItemsShown(e.target.id)}>
        Photos
      </button>
      <button
        id="gifs"
        className="header-menu-item"
        onClick={e => setItemsShown(e.target.id)}>
        Gifs
      </button>
      <button
        id="show-all"
        className="header-menu-item"
        onClick={e => setItemsShown(e.target.id)}>
        Show all
      </button>
    </div>
  )
}

export default TopMenu
