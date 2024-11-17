import React, { useState, useEffect } from 'react'
import { dataObj } from '../data';

export default function Faq( { mode } ) {

    const [activeFaq, setActiveFaq] = useState(0)
    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
                const data = await response.json();
                setFaqs(data)
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        // fetchData();
        // console.log(dataObj);
    }, []);

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
                    {
                        dataObj?.map( (obj, idx) => {
                            return <div key={idx} onClick={() => { setActiveFaq(idx + 1)}} className={activeFaq === idx + 1 ? 'active' : ''}>
                                        <div>
                                            <a>{ obj.title }</a>
                                            <div className={`caret-btn ${ mode ? 'dark' : ''}`}>
                                                <div className={`chevron-down ${ mode ? 'dark' : ''}`}>
                                                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p>{ obj.content }</p>
                                    </div>
                        })
                    }
                </div>
            </div>
            <div className={`subscribe ${ mode ? 'dark' : ''}`}>
                <div className="subscribe-content">
                    <img src="/src/assets/notification.svg" alt="" />
                    <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
                </div>
                <div className="subscribe-input">
                    <input placeholder="Your Email" type="email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </section>
    )
}
