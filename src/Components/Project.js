import React from "react";

function Project({ image, name, alt,link }) {
	return (
		<div className="col-12 col-md-6 px-3">
			<a href={link} target={"_blank"}>
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
					<h6 className="text-warning fw-semibold mt-2 pt-1 pb-2 ">{name}</h6>
				</div>
			</a>
		</div>
	);
}
export default Project;
