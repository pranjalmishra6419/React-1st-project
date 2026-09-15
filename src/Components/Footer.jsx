import React from 'react'
import './Css/Footer.css'

const Footer = () => {
  return (
    <>

    <div className="footer-outer">
      <div className="footer-top">
        <div className="secure-payment-outer footer-line">
          <div className="secure-payment-icon">
            <img src="/images/foot1.png" alt="" />
          </div>
          <div className="secure-payment-text">
            <h5>Secure Payment</h5>
            <p>With support for cards, net banking, UPI, wallets & more, we offer seamless digital payment experience</p>
          </div>
        </div>
        <div className="secure-payment-outer">
          <div className="secure-payment-icon">
            <img src="/images/foot2.png" alt="" />
          </div>
          <div className="secure-payment-text  footer-line">
            <h5>Most Trusted Brand</h5>
            <p>Our solutions are purely consumer centric, we listen to you and work for your safety, comfort and style.</p>
          </div>
          <hr />
        </div>
        <div className="secure-payment-outer">
          <div className="secure-payment-icon">
            <img src="/images/foot3.png" alt="" />
          </div>
          <div className="secure-payment-text">
            <h5>Customised Gifting Options</h5>
            <p>With support for cards, net banking, UPI, wallets & more, we offer seamless digital payment experience</p>
          </div>
        </div>
      </div>
      <hr className='hr-line-footer'/>

      <div className="footer-bottom">
        <div className="footer-bottom-1">
          <img src="/images/foot4.webp" alt="" />
          <p>Flowera is a one-stop solution for Flowers, cakes & gift delivery to More than 500plus locations in India.</p>
        </div>
        <div className="footer-bottom-2">
          <h4>Information</h4>
          <ul>
            <li>All City</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Privacy & Policy</li>
            <li>Refund & Cancellation</li>
            <li>Terms and Conditions</li>
            <li>About us</li>
            <li>Offers</li>
            <li>Become a Vendor</li>
            <li>Corporate Tie-ups</li>
          </ul>
        </div>
        <div className="footer-bottom-3">
          <h5>Follow Us</h5>
        </div>
        <div className="footer-bottom-4">
          <h5>Contact Us</h5>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Footer