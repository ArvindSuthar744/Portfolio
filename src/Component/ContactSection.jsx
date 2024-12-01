import React from 'react'

function ContactSection() {
    return (
        <>
            <section className="contact-section" id="contact">
                <div className="all-heading">
                    <p className="all-heading-para">Get in touch</p>
                    <h2>Contact me</h2>
                </div>

                <div className="contact-us">
                    <div className="contact-us-1">
                        <div className="contact-us-1-item">

                            <div className="contact-talk-heading">
                                <h3>Let's Talk About Everything!</h3>
                            </div>
                            <div className="contact-talk-dec">
                                <p>I'm currently avaliable to take on new projects, so feel free to send me a
                                    message about anything that you want me to work on. You can contact anytime.
                                </p>
                            </div>
                        </div>
                        <div className="contact-list-item-2">
                            <div className="contact-list">
                                <i className="fa-brands fa-linkedin"></i>
                                <a href="#">Arvind Kumar</a>
                            </div>
                            <div className="contact-list">
                                <i className="fa-brands fa-whatsapp"></i>
                                <a href="#">M 9166042971</a>
                            </div>
                            <div className="contact-list">
                                <i className="fa-solid fa-envelope"></i>
                                <a href="#">arvindsuthar744@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-us-2">
                        <div className="contact-list-item-2">
                            <h2 className="get-font">Get in Touch</h2>
                            <input type="text" id="fullname" name="fullname" placeholder="Full Name" />
                            <input type="email" id="email" name="email" placeholder="Email" />
                            <textarea name="message" id="message" cols="" rows="" placeholder="Message"></textarea>
                            <button id="submit-btn" >
                                Send Message
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection
