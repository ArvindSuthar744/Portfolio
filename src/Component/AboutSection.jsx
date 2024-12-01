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
                        <img src="Images/profile-pic.png" alt="" className="about-img" />
                        <div className="links">
                            <a href="https://www.linkedin.com/in/arvind-kumar-ab48b8288">Linkedin</a>
                            <a href="https://www.instagram.com/arvindsuthar744/">Instagram</a>
                            <a href="https://github.com/ArvindSuthar744">Github</a>
                            <a href="https://vercel.com/arvind-kumars-projects-2e868fe1">Vercel</a>
                        </div>
                    </div>

                    <div className="about-head-2">
                        <div className="about-dec">
                            <h2>Hi I'm Arvindkumar,</h2>
                            <p>Skilled in front-end web development with a strong foundation
                                 in Html, Css, JavaScript and React. Proficient in creating 
                                 visually appealing and responsive user interfaces. 
                                 Demonstrated ability to collaborate with cross-functional 
                                 teams to deliver high-quality, user-centric websites. <br />
                                 Stay abreast of the latest industry trends and best 
                                 practices in web development. Committed to continuous 
                                 learning and enhancing skills to contribute effectively 
                                 to dynamic projects and uploaded on Github.
                            </p>
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
