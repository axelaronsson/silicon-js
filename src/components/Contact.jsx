import React from 'react'

export default function Contact() {
  return (
    <main>
    <div className='contact-page'>
        <div className="wrapper">
            <h1>Contact Us</h1>
            <div className='contact-info'>
                <div>
                    <img src="/src/assets/contactemail.svg" alt="" />
                </div>
                <div>
                    <h2>Email us</h2>
                    <p>Please feel free to drop us a line. We will<br/> respond as soon as possible.</p>
                    <button className='contact-button'>Leave a message <i className="fa-sharp fa-regular fa-arrow-right"></i></button>
                </div>
            </div>
            <div className='contact-info'>
                <div>
                    <img src="/src/assets/career.svg" alt="" />
                </div>
                <div>
                    <h2>Careers</h2>
                    <p>Sit ac ipsum leo lorem magna nunc mattis<br/> maecenas non vestibulum.</p>
                    <button className='contact-button'>Send an application <i className="fa-sharp fa-regular fa-arrow-right"></i></button>
                </div>
            </div>
            <div className='contact-form'>
                <div className='form-wrapper'>
                    <h2>Get Online Consultation</h2>
                    <form action="">
                        <label htmlFor="full-name">Full name</label><br/>
                        <input type="text" name="" id="full-name" /><br/>
                        <label htmlFor="email-adress">Email address</label><br/>
                        <input type="text" name="" id="email-adress" /><br/>
                        <label htmlFor="specialist">Specialist</label><br/>
                        <div className='specialist'>
                            <select name="" id="specialist">
                                <option value=""></option>
                                <option value="developer">Developer</option>
                                <option value="productowner">Product owner</option>
                            </select>
                        </div>
                        <button className='form-button'>Make an appointment</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
    <div className="location">
        <div className="wrapper">
            <img src="/src/assets/map.png" alt="" />
            <div className="address-info">
                <h5>Medical Center 1</h5>
                <div>
                    <img src="/src/assets/bx-map.svg" alt="" />
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
                <div>
                    <img src="/src/assets/bx-phone-call.svg" alt="" />
                    <p>(406) 555-0120</p>
                </div>
                <div>
                    <img src="/src/assets/bx-time-five.svg" alt="" />
                    <p><span>Mon – Fri:</span> 9:00 am – 22:00 am</p><br/>
                </div>
                <p><span>Sat – Sun:</span> 9:00 am – 20:00 am</p><br/>
                <h5>Medical Center 2</h5>
                <div>
                    <img src="/src/assets/bx-map.svg" alt="" />
                    <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                </div>
                <div>
                    <img src="/src/assets/bx-phone-call.svg" alt="" />
                    <p>(406) 544-0123</p>
                </div>
                <div>
                    <img src="/src/assets/bx-time-five.svg" alt="" />
                    <p><span>Mon – Fri:</span> 9:00 am – 22:00 am</p><br/>
                </div>
                <p><span>Sat – Sun:</span> 9:00 am – 20:00 am</p><br/>
                <div className='social-media'>
                    <img src="/src/assets/fb.svg" alt="" />
                    <img src="/src/assets/insta.svg" alt="" />
                    <img src="/src/assets/twitter.svg" alt="" />
                    <img src="/src/assets/yt.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
    </main>
  )
}
