import React from "react";
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="row">
			<nav className="navbar navbar-expand-md content ">
				<div className="container-fluid py-3">
					<div className="navbar-brand fw-bold text-white ps-md-2">Dedan Wamalwa</div>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
						<div className="navbar-nav m-auto">
							<Link to={"/"}>
								<div className="nav-link active fw-bold text-white " data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
									Home
								</div>
							</Link>
							<Link to={"/Experience"}>
								<div className="nav-link active fw-bold text-white" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">Experience</div>
							</Link>
							<Link to={"/Projects"}>
								<div className="nav-link active fw-bold text-white" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">Projects</div>
							</Link>
							<a href="#skills">
								<div className="nav-link active fw-bold text-white" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">Skills</div>
							</a>
							<a href="#contact">
								<div className="nav-link active fw-bold text-white" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">Contact</div>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
