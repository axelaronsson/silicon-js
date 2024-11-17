import React from 'react'

export default function AppFeatures( { mode } ) {

  return (
    <section className={`app-features ${mode ? 'dark' : ''}`}>
        <div className="logos">
            <img src={`/src/assets/${mode ? '' : 'light'}logo1.svg`} alt="" />
            <img src={`/src/assets/${mode ? '' : 'light'}logo2.svg`} alt="" />
            <img src={`/src/assets/${mode ? '' : 'light'}logo3.svg`} alt="" />
            <img src={`/src/assets/${mode ? '' : 'light'}logo4.svg`} alt="" />
            <img src={`/src/assets/${mode ? '' : 'light'}logo5.svg`} alt="" />
            <img src={`/src/assets/${mode ? '' : 'light'}logo6.svg`} alt="" />
        </div>
        <div className="features-content">
            <img src="/src/assets/features-phone.svg" alt="" />
            <div className="features-info">
                <h1>App Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                <div className="feature-grid">
                    <div className="icon">
                        <img src="/src/assets/credit-card.svg" alt="" />
                    </div>
                    <div className="text">
                        <h5>Easy Payments</h5>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                    <div className="icon">
                        <img src="/src/assets/shield.svg" alt="" />
                    </div>
                    <div className="text">
                        <h5>Data Security</h5>
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                    </div>
                    <div className="icon">
                        <img src="/src/assets/bars-graphic.svg" alt="" />
                    </div>
                    <div className="text">
                        <h5>Cost Statistics</h5>
                        <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                    <div className="icon">
                        <img src="/src/assets/communication.svg" alt="" />
                    </div>
                    <div className="text">
                        <h5>Support 24/7</h5>
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>
                    <div className="icon">
                        <img src="/src/assets/wallet.svg" alt="" />
                    </div>
                    <div className="text">
                        <h5>Regular Cashback</h5>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>
                    <div className="icon">
                        <img src="/src/assets/happy.svg" alt="" />
                    </div>
                    <div className="text">
                        <h5>Top Standards</h5>
                        <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
