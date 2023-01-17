import React from "react";

function Home() {
	return (
		<div className="row bg-secondary text-black">
			<div className="col-md-7 ml-5 lh-lg">
				{/* summary */}
				<p className="mb-0">Hello, I'm Dedan Wamalwa </p>
				<p className="">
					I'm a Software Engineer passionate about building user-centric software products that
					guarantee high user satisfaction. The most amazing experience I've had as SWE is pair
					programming-you get to solve problems quite fast! With that said, I welcome you to walk
					with me in this fantastic journey. Feel free to reach out for an engaging session. Thank
					you.
				</p>
				{/* work experience */}
				<div className="row">
					<h5 className="fw-bold">WORK EXPERIENCE</h5>
					<div className="col-12 col-md-7">Software Engineer - Internship </div>
					<div className="col-12 col-md-5">September 2022 - January 2023</div>
					<div className="col-12">
						<p>
							● Implemented user experience performance modifications to an existing Point of Sale
							package; then conducted training sessions on the package and provided support to 10+
							users.
						</p>
						<p>
							● Collaborated with my team to implement a new feature of the POS software to display
							a menu that enables customers to order items online.
						</p>
						<p>
							● Implemented a new feature, in collaboration with my team, to a warehouse management
							and distribution software that tracks towns and customers in a respective route.
						</p>
						<p>
							● Assisted a team member in solving a persistent bug in the database of a warehouse
							and distribution management software.
						</p>
					</div>
				</div>
				{/* Education/ Courses/ Certficates */}
				<div className="row">
					<h6>Education</h6>
					
				</div>
			</div>
		</div>
	);
}

export default Home;
