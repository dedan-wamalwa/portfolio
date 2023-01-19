import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import * as Icon from "react-bootstrap-icons";
function Experience() {
	return (
		<div className="row content">
			<div className="col-md-8 m-auto">
			<VerticalTimeline className="mb-4">
				<VerticalTimelineElement className="vertical-timeline-element--education" date=" August 2018 -December 2022" dateClassName="ms-2 text-black fw-bold" iconStyle={{ background: "gray", color: "black" }} icon={<Icon.MortarboardFill />}>
					<h6 className="vertical-timeline-element-title text-black">Multimedia University of Kenya - Nairobi,Kenya</h6>
					<p className="text-black">
						Bachelor of Science - Computer Science
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement className="vertical-timeline-element--work" date=" September 2022 - January 2023" dateClassName="me-2 text-black fw-bold" iconStyle={{ background: "gray", color: "brown" }} icon={<Icon.BriefcaseFill />}>
					<h6 className="vertical-timeline-element-title text-black">iOSoft Solutions Limited - Nairobi,Kenya</h6>
					<p className="text-black">
						Software Engineer - Internship
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement className="vertical-timeline-element--work" date="January 2023 - Present" dateClassName="ms-2 text-black fw-bold" iconStyle={{ background: "gray", color: "brown" }} icon={<Icon.BriefcaseFill />}>
					<h6 className="vertical-timeline-element-title text-black">Nairobi,Kenya</h6>
					<p className="text-black">
						Software Developer - Freelance
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
			</div>
		</div>
	);
}

export default Experience;
