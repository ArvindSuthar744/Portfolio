import React from 'react'

function FooterSection() {
  return (
    <>
      <section className="footer-section">
            <div className="footer-heading">
              <h2>ArvindKumar</h2>
            </div>
            <div className="footer-para">
              <p>&copy; 2024 ArvinKumar. All Rights Reserved.</p>
            </div>
            <div className="footer-links">
              <p>Find me on </p>
              <div className="footer-link-1">
              <a href="https://www.linkedin.com/in/arvind-kumar-ab48b8288">
              <i className="fa-brands fa-linkedin"></i></a>
              </div>
              <div className="footer-link-1">
                <a href="https://www.instagram.com/arvindsuthar744/">
                <i className="fa-brands fa-instagram"></i></a>
              </div>
              <div className="footer-link-1">
                <a href="https://github.com/ArvindSuthar744">
                <i className="fa-brands fa-github"></i></a>
              </div>
            </div>
        </section>
    </>
  )
}

export default FooterSection
