import React from "react";
import * as Icon from "react-bootstrap-icons";
function Footer() {
	const date=new Date();
	return (
		<div className="row text-white content">
			<div className="col-12 m-auto" >
				<p className="text-center">
					<a href="https://github.com/dedan-wamalwa" target={"_blank"} rel="noopener noreferrer" className="mx-2">
						<Icon.Github size={25} color={"black"}/>
					</a>
					<a href="https://www.linkedin.com/in/dedan-wamalwa-95a6a11a9" target={"_blank"} rel="noopener noreferrer" className="mx-2">
						<Icon.Linkedin size={25} color={"white"} />
					</a>
					<a href="https://www.instagram.com/dedan_wamalwa/?next=%2F" target={"_blank"} rel="noopener noreferrer" className="mx-2">
						<Icon.Instagram size={25} color={"violet"}/>
					</a>
				</p>
				<ul className="list-unstyled fs-6 fw-light ">
					<li className="text-center text-break ">
						<Icon.EnvelopeAtFill /> owdedan@gmail.com
					</li>
					<li className="text-center " id="contact">
						<Icon.TelephoneOutboundFill /> +254 796 760359
					</li>
					<li className="text-center ">
						<Icon.TelephoneOutboundFill /> +254 750 205745
					</li>
				</ul>
				<p className="text-center mb-2"><span>&copy; </span>{date.getFullYear()} All Rights Reserved</p>
			</div>
		</div>
	);
}

export default Footer;
