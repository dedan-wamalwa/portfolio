import React from "react";

function Project({ image, name, alt,link,stack,progress,target }) {
	return (
		<div className="col-12 col-md-6 px-3">
			<a href={link} target={target} rel="noopener noreferrer">
				<div className="shadow-lg mt-2 rounded project-card">
					<img src={image} alt={alt} className="project-image" />
					{/* <div
					style={{
						backgroundImage: `url(${image})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						height: "30px",
						width: "100%",
					}}
					className="rounded-top"
				></div> */}
					<h6 className="text-warning fw-semibold mt-2 pt-1 ">{name} <span className="bg-dark text-danger fs-6 fw-light">{progress}</span></h6>
					<p className="pb-2 text-white"><span className="fw-bold">Stack: </span><span>{stack}</span></p>
				</div>
			</a>
		</div>
	);
}
export default Project;
