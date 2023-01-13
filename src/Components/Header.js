import React from "react";

function Header() {
	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			<div className="container-fluid">
				<a className="navbar-brand fw-bold" href="#">
					Wamalwa
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active fw-bold" aria-current="page" href="#">
							Home
						</a>
						<a className="nav-link active fw-bold" href="#">
							About
						</a>
						<a className="nav-link active fw-bold" href="#">
							Experience
						</a>
						<a className="nav-link active fw-bold" href="#">
							Projects
						</a>
						<a className="nav-link active fw-bold" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
