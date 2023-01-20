import React from "react";
import * as Icon from "react-bootstrap-icons";
function Home() {
	return (
		<div className="row text-white content">
			<div className="col-md-6 m-auto mt-md-5 mt-1 mb-3 text-center">
				{/* about */}
				<p className="mb-2 mt-5 fs-2 text-warning fw-bold">Hi, I am Dedan Wamalwa.</p>
				<p className="fs-4 fw-bold">
					I am a software engineer with an agile mindset passionate about developing user-centric software products.
					<br />I appreciate the challenge of bringing an idea to life using lines of code.
				</p>
				{/* socials */}
				<p className="text-center">
					<a href="https://github.com/dedan-wamalwa" target={"_blank"} className="mx-2">
						<Icon.Github size={30} color={"black"} />
					</a>
					<a href="https://www.linkedin.com/in/dedan-wamalwa-95a6a11a9" target={"_blank"} className="mx-2">
						<Icon.Linkedin size={30} color={"white"} />
					</a>
					<a href="https://www.instagram.com/dedan_wamalwa/?next=%2F" target={"_blank"} className="mx-2">
						<Icon.Instagram size={30} color={"violet"} />
					</a>
				</p>
				{/* skills */}
				<h2 className="mt-5 fw-bold" id="skills">Skills</h2>
				<div className="text-start ps-4 mt-4">
					<h3>Programming Languages</h3>
					<p className="">Python , JavaScript, PHP, Java.</p>
					<h3>Front End Development</h3>
					<p>ReactJS, jQuery, HTML, CSS, Bootstrap.</p>
					<h3>Back End Development</h3>
					<p>CodeIgniter, Django, Flask, MySQL.</p>
					<h3>Collaboration</h3>
					<p>Git (GitHub, GitLab), Scrum & Kanban, Slack.</p>
				</div>
			</div>
		</div>
	);
}
export default Home;
