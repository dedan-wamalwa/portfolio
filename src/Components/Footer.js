import React from "react";
import * as Icon from "react-bootstrap-icons";
function Footer() {
	return (
		<footer>
			<div className="row text-dark">
				<center>
					<div className="col-12 col-md-8 col-lg-6   ">
						<div className="row">
							{/* Contact */}
							<div className="col-4 ">
								<h6 className="mb-0 text-start">Contact</h6>
								<ul className="list-unstyled">
									<li className="text-start"><Icon.EnvelopeAtFill /> owdedan@gmail.com</li>
									<li className="text-start"><Icon.TelephoneOutboundFill /> +254 796 760359</li>
									<li className="text-start"><Icon.TelephoneOutboundFill /> +254 750 205745</li>
									<li>
										<span></span> <span></span>
									</li>
								</ul>
							</div>
							{/* projects */}
							<div className="col-4 ">
								<h6 className="mb-0 text-start">Projects</h6>
								<ul className="list-unstyled">
									<li className="text-start">Chatbot</li>
									<li className="text-start">Real Estate Price Prediction</li>
									<li className="text-start">Customer Churn Prediction</li>
								</ul>
							</div>
							{/* Intersets */}
							<div className="col-4  ">
								<h6 className="mb-0 text-start">Interests</h6>
								<ul className="list-unstyled">
									<li className="text-start">Microservices</li>
									<li className="text-start">System Design and Scaling</li>
									<li className="text-start">Cloud Computing</li>
									<li className="text-start">Containers</li>
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
