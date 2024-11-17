import React from 'react'

export default function Contact() {
  return (
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
  )
}
