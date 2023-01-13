import React from "react";
import * as Icon from "react-bootstrap-icons";
function Footer() {
	return (
		<footer>
			<div className="row">
				<center>
					<div className="col-12 col-md-8 col-lg-6   ">
						<div className="row">
							{/* Contact */}
							<div className="col-4 ">
								<h6>Contact</h6>
								<ul className="list-unstyled">
									<li class="text-center">owdedan@gmail.com</li>
									<li class="text-center">+254 796 760359</li>
									<li class="text-center">+254 750 205745</li>
									<li>
										<span></span> <span></span>
									</li>
								</ul>
							</div>
							{/* projects */}
							<div className="col-4 ">
								<h6>Projects</h6>
								<ul className="list-unstyled">
									<li class="text-center">Chatbot</li>
									<li class="text-center">Real Estate Price Prediction</li>
									<li class="text-center">Customer Churn Prediction</li>
								</ul>
							</div>
							{/* Intersets */}
							<div className="col-4  ">
								<h6 className="">Interests</h6>
								<ul className="list-unstyled">
									<li class="text-center">Microservices</li>
									<li class="text-center">System Scaling</li>
									<li class="text-center">Cloud Computing</li>
									<li class="text-center">Containers</li>
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
