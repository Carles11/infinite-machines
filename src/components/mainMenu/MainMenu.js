import React from 'react'

import './mainMenu.css'

const MainMenu = () => {
  return (
    <div>
      <nav>
        <div className="main-title-container">
          <ul className="main-infinite-title main-title-flex">
            <li>
              <a href="https://crix.design" className="active">
                <p id="highlight">Infinite Machines</p>
              </a>
            </li>

            <li>
              <a href="https://crix.design" className="active">
                All infinite apps
              </a>
            </li>
            <li>
              <a href="https://crix.design">Data privacy policy</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default MainMenu
