import React from 'react'

export default function Faq( { mode } ) {
  return (
    <section className="faq">
        <div className={`faq-wrapper ${ mode ? 'dark' : ''}`}>
            <div className="contact">
                <h2>Any questions? <br/> Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
                <div>
                    <img src="/src/assets/phone.svg" alt="" />
                    <p>Still have  questions?</p>
                    <button>Contact us <i className="fa-sharp fa-regular fa-arrow-right"></i></button>
                </div>
                <div>
                    <img src="/src/assets/message.svg" alt="" />
                    <p>Don't like phone calls?</p>
                    <button>Contact us <i className="fa-sharp fa-regular fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="dropdowns">
                <div>
                    <div>
                        <a>Is any of my personal information stored in the App?</a>
                        <div className="caret-btn">
                            <div className="chevron-down">
                                <i className="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <a>What formats can I download my transaction history in?</a>
                        <div className="caret-btn">
                            <div className="chevron-down">
                                <i className="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <a>Can I schedule future transfers?</a>
                        <div className="caret-btn">
                            <div className="chevron-down">
                                <i className="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                </div>
                <div>
                    <div>
                        <a>When can I use Banking App services?</a>
                        <div className="caret-btn">
                            <div className="chevron-down">
                                <i className="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <a>Can I create my own password that is easy for me to remember?</a>
                        <div className="caret-btn">
                            <div className="chevron-down">
                                <i className="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <a>What happens if I forget or lose my password?</a>
                        <div className="caret-btn">
                            <div className="chevron-down">
                                <i className="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="subscribe">
            <div className="subscribe-content">
                <img src="/src/assets/notification.svg" alt="" />
                <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
            </div>
            <div className="subscribe-input">
                <input placeholder="Your Email" type="text" />
                <button>Subscribe</button>
            </div>
        </div>
    </section>
  )
}
