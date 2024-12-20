import React from 'react'

function HeaderSection() {
    return (
        <>
            <section className="header">
                <div className="hero-section">
                <div className="animate-box">
                        <div className="animate-1">
                            <div className='b1'></div>
                            <div className='b2'></div>
                            <div className='b3'></div>
                            <div className='b4'></div>
                        </div>
                    </div>
                    <div className="heading-1">
                        <div className="heading-1-h2">
                            <h2>Creative</h2>
                        </div>
                    </div>
                    <div className="heading-2">
                        <span className="visual-span">
                            <i id="visual-text">Visual </i>
                        </span>
                        <div className="heading-2-h2">
                            <h2 className="h2-2">Developer</h2>
                        </div>
                    </div>
                    <div className="heading-3">
                        <div className="heading-3-h2">
                            <h2>Arvind Kumar</h2>
                        </div>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/arvind-kumar-ab48b8288"
                             className='all-heading-para' >Linkedin</a>
                            <a href="https://www.instagram.com/arvindsuthar744/"
                             className='all-heading-para' >Instagram</a>
                            <a href="https://github.com/ArvindSuthar744"
                             className='all-heading-para' >Github</a>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default HeaderSection
