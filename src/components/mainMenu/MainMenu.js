import React from 'react'

import './mainMenu.css'

const MainMenu = () => {
  return (
    <div>
      <nav>
        <div className="main-title-container">
          <div className="main-title-grid">
            <div className="main-infinite-title">
              <p id="highlight">Infinite Machines</p>
            </div>
            <div className="column-xs-12 column-md-2">
              <ul>
                <li>
                  <a href="#" className="active">
                    All infinite apps
                  </a>
                </li>
                <li>
                  <a href="#">Data privacy policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainMenu
