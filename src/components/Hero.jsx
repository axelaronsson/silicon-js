import React from 'react'

export default function Hero( { mode } ) {
  return (
    <section className="hero">
        <div className={`hero-wrapper ${mode ? 'dark' : ''}`}>
            <div className="hero-content">
                <div>
                    <h1>Manage All Your Money in One App</h1>
                    <p>We offer you a new generation of the mobile banking.
                        <br/> Save, spend & manage money in your pocket.
                    </p>
                    <div className="app-buttons">
                        <img src={`/src/assets/${mode ? '' : 'light'}appstore.svg`} alt="" />
                        <img src={`/src/assets/${mode ? '' : 'light'}googleplay.svg`} alt="" />
                    </div>
                </div>
                <div className="discover">
                    <div className={`caret-btn ${mode ? 'dark' : ''}`}></div>
                    <div className="chevron-down">
                        <img src={`/src/assets/${mode ? '' : 'light'}chevron-down.svg`} alt="" />
                    </div>
                    <a href="#">Discover more</a>
                </div>
            </div>
            <div className="hero-iphones">
                <img className="iphone-1" src="/src/assets/iPhone-hero-1.svg" alt="" />
                <img className="iphone-1" src="/src/assets/iPhone-hero-2.svg" alt="" />
            </div>
        </div>
    </section>
  )
}
