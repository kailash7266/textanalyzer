import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import './Index.css'
import PropTypes from 'prop-types';
function Navbar(props) {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 10) {
			$('.navbar').addClass('floatingNav1');
		} else {
			$('.navbar').removeClass('floatingNav1');
		}
	});
	
	// $(document).on('click', '.nav-item', function(e){
	//     // e.preventDefault();
	//      $('html,body').animate({scrollTop: $(this).offset().top}, 800);
	// })
	return (
		<>
			<div className="containerNav">
				<nav className="navbar navbar-expand-lg navbar-light" >
					<a className="navbar-brand" href="/">{props.title}</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">{props.homepage} <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">{props.about}</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">{props.contact}</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#services">{props.services}</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn custom-btn-outline-success my-2 my-sm-0" type="submit">{props.button}</button>
						</form>
					</div>
				</nav>
			</div>
		</>
	)

}
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
	homepage: "Homepage",
	title: "Text Analizer",
	contact: "Contact",
	services: "Services",
	about: "About us",
	button: "Search"
}

export default Navbar;