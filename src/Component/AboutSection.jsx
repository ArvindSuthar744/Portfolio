import React from 'react'

function AboutSection() {
    return (
        <>
            <section className="about-section" id="about">
                <div className="all-heading">
                    <p className="all-heading-para">Get To Know More</p>
                    <h2>About me</h2>
                </div>

                <div className="about-head-part">

                    <div className="about-head-1">
                        <img src="Images/profile-1.png" alt="" className="about-img" />
                    </div>

                    <div className="about-head-2">
                        <div className="about-dec">
                          <div className="about-h2">
                          <h2>Hi I'm Arvindkumar,</h2>
                          </div>
                            <h4>
                                Front-end web developer skilled in HTML, CSS, JavaScript, and
                                React, with expertise in building responsive, user-friendly
                                interfaces. Passionate about delivering high-quality websites
                                and continuously learning to stay updated with industry trends.
                                Dedicated to contributing to dynamic projects and uploaded on Github.
                            </h4>
                        </div>
                        <div className="about-btn">
                        <a href="../public/Arvind-resume.pdf"
                            download="Arvind-resume.pdf" className='resume-btn'>
                            Download Cv
                        </a>
                        <a href="https://wa.me/9166042971" className='resume-btn'>Contact Info</a>
                    </div>
                    </div>
                </div>
                <div className="about-part">
                    <div className="education">
                        <i className="fa-solid fa-user-graduate"></i>
                        <h3>Education</h3>
                        <h4>Undergraduate</h4>
                        <p>Bachelor of Computer Applications</p>
                        <p>S.P.U College, Falna(Raj.)</p>
                    </div>
                    <div className="education">
                        <i className="fa-solid fa-medal"></i>
                        <h3>Experience</h3>
                        <h4>Frontend developer</h4>
                        <p>6 Month Training</p>
                        <p>Tops technologies Ahmedabad</p>
                    </div>
                </div>


            </section>
        </>
    )
}

export default AboutSection
