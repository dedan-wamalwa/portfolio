import React from "react";
import * as Icon from "react-bootstrap-icons";
function Footer() {
	return (
		<footer>
			<div className="row text-dark">
				<center>
					<div className="col-12 col-md-8 col-lg-6   ">
						<div className="row fs-small text-body">
							{/* Contact */}
							<div className="col-4 ">
								<h6 className="mb-0 text-start">Contact</h6>
								<ul className="list-unstyled fs-6 fw-light ">
									<li className="text-start text-break ft-items"><Icon.EnvelopeAtFill /> owdedan@gmail.com</li>
									<li className="text-start ft-items"><Icon.TelephoneOutboundFill /> +254796760359</li>
									<li className="text-start ft-items"><Icon.TelephoneOutboundFill /> +254750205745</li>
									<li>
										<span></span> <span></span>
									</li>
								</ul>
							</div>
							{/* projects */}
							<div className="col-4 ">
								<h6 className="mb-0 text-start text-black">Projects</h6>
								<ul className="list-unstyled fs-6 fw-light ">
									<li className="text-start ft-items">Chatbot</li>
									<li className="text-start ft-items">Real Estate Price Prediction</li>
									<li className="text-start ft-items">Customer Churn Prediction</li>
								</ul>
							</div>
							{/* Intersets */}
							<div className="col-4">
								<h6 className="mb-0 text-start">Interests</h6>
								<ul className="list-unstyled fs-6 fw-light ">
									<li className="text-start ft-items">Microservices</li>
									<li className="text-start ft-items">System Design and Scaling</li>
									<li className="text-start ft-items">Cloud Computing</li>
									<li className="text-start ft-items">Containers</li>
								</ul>
							</div>
						</div>
					</div>
				</center>
			</div>
		</footer>
	);
}

export default Footer;
