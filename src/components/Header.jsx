import React from 'react'

export default function Header( {handleSwitch, mode, handlePage} ) {

  return (
    <header>
        <div className={`header-wrapper ${mode ? 'dark' : ''}`}>
            <div>
                <img onClick={() => {handlePage('home')}} src={`/src/assets/${mode ? '' : 'light'}solid.svg`} alt="" />
                 <a href="#">Features</a>
                 <a onClick={() => {handlePage('contact')}} href="#">Contact</a>
            </div>
            <div>
                <p>Dark Mode</p>
                <label className="switch">
                    <input onClick={handleSwitch} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <button>
                     <img className="user" src="/src/assets/Subtract.svg" alt="" />
                    Sign in / up
                </button>
            </div>
        </div>
    </header>
  )
}
