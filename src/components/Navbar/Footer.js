import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div>
    <footer className='mt-5'>
        <div className="footer-links">
            <a href="#home">Homepage</a>
            <a href="#features">Text Analizer</a>
            <a href="#how-it-works">Contact</a>
            <a href="#resources">Services</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
            <a href="/"><i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="/"><i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="/"><i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
        </div>
        <div class="footer-contact">
            <p ><i className='fa fa-envelope mr-2'></i>Email: kailash231998@gmail.com</p>
            <p><i className="fa fa-phone mr-2"></i>Phone: +91-7266843751</p>
            <p><i className="fa fa-whatsapp mr-2" ></i>Whatsapp: +91-7317532032</p>
        </div>
        <form className="newsletter-signup form-inline my-2 my-lg-0">
			<input className="form-control mr-sm-2" type="search" placeholder="Newsletter subscription" aria-label="Newsletter subscription" />
			<button className="btn custom-btn-outline-success my-2 my-sm-0" type="submit">Subscribe</button>
		</form>
    </footer>
    </div>
  )
}
