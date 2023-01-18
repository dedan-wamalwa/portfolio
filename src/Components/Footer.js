import React from "react";
import * as Icon from "react-bootstrap-icons";
function Footer() {
	return (
		<div className="row text-white content">
			<div className="col-12 m-auto">
				<p className="text-center text-white"><a href="https://github.com/dedan-wamalwa"><Icon.Github/></a> <a href="https://www.linkedin.com/in/dedan-wamalwa-95a6a11a9"><Icon.Linkedin/> </a> <a href=""><Icon.Instagram/></a></p>
				<ul className="list-unstyled fs-6 fw-light ">
					<li className="text-center text-break ">
						<Icon.EnvelopeAtFill /> owdedan@gmail.com
					</li>
					<li className="text-center ">
						<Icon.TelephoneOutboundFill /> +254 796 760359
					</li>
					<li className="text-center ">
						<Icon.TelephoneOutboundFill /> +254 750 205745
					</li>
				</ul>
				<p className="text-center"> </p>
			</div>
		</div>
	);
}

export default Footer;
