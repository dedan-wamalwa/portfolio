import React from "react";
import Project from "../Components/Project";
import img1 from "../Components/images/code4.jpg";
function Projects() {
	return (
		<div className="row text-white content">
			<div className="col-md-8 m-auto mt-5 mb-3 text-center">
				<Project name={"FAQs Chatbot"} image={img1}/>
				<Project name={"Real Estate Price Prediction"}/>
				<Project name={"Customer Retention Prediction Model"}/>

			</div>
		</div>
	);
}

export default Projects;
