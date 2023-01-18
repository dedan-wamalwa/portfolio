import React from "react";
import { Link } from "react-router-dom";
function Header() {
	return (
		<nav className="navbar navbar-expand-md content border-bottom border-success">
			<div className="container-fluid py-3">
				<div className="navbar-brand fw-bold text-white">
					Dedan Wamalwa
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
					<div className="navbar-nav m-auto">
						<Link to={"/"}>
							<div className="nav-link active fw-bold text-white" aria-current="page">
								Home
							</div>
						</Link>
						<Link to={"/Experience"}>
							<div className="nav-link active fw-bold text-white" >
								Experience
							</div>
						</Link>
						<Link to={"/Projects"}>
							<div className="nav-link active fw-bold text-white" >
								Projects
							</div>
						</Link>
						<Link to={"/Contact"}>
							<div className="nav-link active fw-bold text-white" >
								Contact
							</div>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
