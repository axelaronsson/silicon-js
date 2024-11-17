import React, {useState} from 'react'

export default function Contact( { mode } ) {

    const [formData, setFormData] = useState({
        fullName: undefined,
        email: undefined,
        specialist: undefined
    })

    const handleName = (e) => {
        const namePattern = /^([\w]{3,})+\s+([\w\s]{3,})+$/i
        if (e.target.value.match(namePattern)) {
            setFormData({...formData, fullName: e.target.value})
        } else {
            setFormData({...formData, fullName: ''})
        }
    }

    const handleEmail = (e) => {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (e.target.value.match(emailPattern)) {
            setFormData({...formData, email: e.target.value})
        } else {
            setFormData({...formData, email: ''})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

  return (
    <main className={mode ? 'dark' : ''}>
        <div className={mode ? 'contact-page dark' : 'contact-page'}>
            <div className="wrapper">
                <div className="breadcrumb">
                    <img src="/src/assets/bx-home-alt.svg" alt="" />
                    <a className='nav-home' href="">Homepage</a>
                    <img src="/src/assets/bx-chevrons-right.svg" alt="" />
                    <a href="#">Contact</a>
                </div>
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
                            <label htmlFor="full-name">Full name</label>
                            {formData.fullName === '' ? <span className='required'>Enter a valid name</span> : ''}<br/>
                            <input
                                onBlur={handleName}
                                type="text"
                                name="full-name"
                                id="full-name" /><br/>
                            <label htmlFor="email-adress">Email address</label>
                            {formData.email === '' ? <span className='required'>Enter a valid email</span> : ''}<br/>
                            <input
                                onBlur={handleEmail}
                                type="text"
                                name="email"
                                id="email-adress" /><br/>
                            <label htmlFor="specialist">Specialist</label>
                            {formData.specialist === '' ? <span className='required'>Field required</span> : ''}<br/>
                            <div className='specialist'>
                                <select
                                    onBlur={(e) => {setFormData({...formData, specialist: e.target.value})}}
                                    onChange={(e) => {setFormData({...formData, specialist: e.target.value})}}
                                    name="spec"
                                    id="specialist"
                                    >
                                    <option value=""></option>
                                    <option value="specialist-1">Specialist 1</option>
                                    <option value="specialist-2">Specialist 2</option>
                                </select>
                            </div>
                            <button onClick={(e) => {handleSubmit(e)}} type="submit" className='form-button'>Make an appointment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className={mode ? 'location dark' : 'location'}>
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
