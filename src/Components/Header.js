import React from "react";
import { Link } from "react-router-dom";
function Header() {
	return (
		<nav className="navbar navbar-expand-md fixed-top">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-brand fw-bold" href="#">
					Dedan Wamalwa
				</div>
				<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
					<div className="navbar-nav  m-auto">
						<Link>
							<div className="nav-link active fw-bold " aria-current="page" href="#">
								Home
							</div>
						</Link>
						<Link>
							<div className="nav-link active fw-bold" href="#">
								Experience
							</div>
						</Link>
						<Link>
							<div className="nav-link active fw-bold" href="#">
								Projects
							</div>
						</Link>
						<Link>
							<div className="nav-link active fw-bold" href="#">
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
