import React from 'react'

function FooterSection() {
  return (
    <>
      <section className="footer-section">
            <div className="footer-heading">
              <a href="#"><h2>ArvindKumar</h2></a>
            </div>
            <div className="footer-para">
              <p>&copy; 2024 ArvinKumar. All Rights Reserved.</p>
            </div>
            <div className="footer-links">
              <p>Find me on </p>
              <div className="footer-link-1">
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </div>
              <div className="footer-link-1">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
              <div className="footer-link-1">
                <a href="#"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
        </section>
    </>
  )
}

export default FooterSection
