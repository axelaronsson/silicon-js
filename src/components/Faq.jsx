import React, { useState, useEffect } from 'react'

export default function Faq( { mode } ) {

    const [activeFaq, setActiveFaq] = useState(0)
    const [faqs, setFaqs] = useState([])
    const [emailInput, setEmailInput] = useState('')
    const [fieldValid, setFieldValid] = useState(undefined)


    const handleSubscribe = (e) => {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (emailInput.match(emailPattern)) {
            setFieldValid(true)
        } else {
            setFieldValid(false)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
                const data = await response.json();
                setFaqs(data)
                console.log(data, 'api');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
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
                        faqs?.map( (obj, idx) => {
                            return <div key={obj.id} onClick={() => { setActiveFaq(idx + 1)}} className={activeFaq === idx + 1 ? 'active' : ''}>
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
                    {fieldValid === false && <span>Enter a valid email</span>}
                    <input
                        onBlur={handleSubscribe}
                        onChange={(e) => {setEmailInput(e.target.value)}}
                        placeholder="Your Email"
                        type="email" />
                    <button >Subscribe</button>
                </div>
            </div>
        </section>
    )
}
