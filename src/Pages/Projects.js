import React from "react";
import Project from "../Components/Project";
import {projectList} from "../Helpers/projectList";
function Projects() {
	return (
		<div className="row content ">
			<h3 className="text-center text-white fw-bold mt-2">My Projects</h3>
			<div className="col-10 col-md-6 m-auto mt-1 mb-3 text-center">
				<div className="row ">
					{projectList.map((project) =>{
						return <Project name={project.name} image={project.image} link={project.link} alt={project.alt} stack={project.stack} progress={project.progress} target={project.target}/>;
					})}
				</div>
			</div>
		</div>
	);
}

export default Projects;
