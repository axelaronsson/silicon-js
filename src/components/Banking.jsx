import React from 'react'

export default function Banking( { mode } ) {
  return (
    <section className={`banking ${ mode ? 'dark' : '' }`}>
        <div className="banking-wrapper">
            <div className="bank-content">
                <div className="inner-box one">
                    <h2>Make your money <br/> transfer simple and clear</h2>
                    <ul>
                        <li><i className="fa-sharp fa-regular fa-circle-check"></i><p>Banking transactions are free for you</p></li>
                        <li><i className="fa-sharp fa-regular fa-circle-check"></i><p>No monthly cash commission</p></li>
                        <li><i className="fa-sharp fa-regular fa-circle-check"></i><p>Manage payments and transactions online</p></li>
                    </ul>
                    <button>Learn more <i className="fa-sharp fa-regular fa-arrow-right"></i></button>
                </div>
                <div className="inner-box two">
                    <img src="/src/assets/inner1.svg" alt="" />
                    <img src="/src/assets/inner2.svg" alt="" />
                </div>
            </div>
            <div className="bank-content">
                <div className="inner-box three">
                    <img src="/src/assets/inner3.svg" alt="" />
                </div>
                <div className="inner-box four">
                    <h2>Receive payment from international bank details</h2>
                    <div className="bank-grid">
                        <div>
                            <img src="/src/assets/credit-card.svg" alt="" />
                        </div>
                        <div>
                            <img src="/src/assets/wallet.svg" alt="" />
                        </div>
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        <button>Learn more <i className="fa-sharp fa-regular fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
