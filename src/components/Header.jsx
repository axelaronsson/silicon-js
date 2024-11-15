import React from 'react'
// import { useRef } from 'react';

export default function Header() {

    const handleSwitch = (e) => {
        console.log(e.target.checked);
    }

  return (
    <header>
        <div className="header-wrapper">
            <div>
                <img src="/src/assets/solid.svg" alt="" />
                 <a href="#">Features</a>
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
