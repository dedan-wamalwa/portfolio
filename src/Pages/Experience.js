import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import * as Icon from "react-bootstrap-icons";
function Experience() {
    return (
        <div className="row content">
            <div className="col-md-8 m-auto">
                <VerticalTimeline className="mb-4">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="February 2023 - Present"
                        dateClassName="ms-sm-3 text-black fw-bold fs-5"
                        iconStyle={{ background: "gray", color: "brown" }}
                        icon={<Icon.BriefcaseFill />}
                    >
                        <h6 className="vertical-timeline-element-title text-black">Software Engineer</h6>
                        <p className="text-black">FlashCredit Africa Limited - Nairobi,Kenya</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=" September 2022 - January 2023"
                        dateClassName="me-3 text-black fw-bold fs-5"
                        iconStyle={{ background: "gray", color: "brown" }}
                        icon={<Icon.BriefcaseFill />}
                    >
                        <h6 className="vertical-timeline-element-title text-black">Software Engineer - Internship</h6>
                        <p className="text-black">iOSoft Solutions Limited - Nairobi,Kenya</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="March 2023 - Present"
                        dateClassName="ms-sm-3 text-black fw-bold fs-5"
                        iconStyle={{ background: "gray", color: "black" }}
                        icon={<Icon.MortarboardFill />}
                    >
                        <h6 className="vertical-timeline-element-title text-black">DevOps Engineering</h6>
                        <p className="text-black">Moringa School - Nairobi,Kenya</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date=" August 2018 - December 2022"
                        dateClassName="me-3 text-black fw-bold fs-5"
                        iconStyle={{ background: "gray", color: "black" }}
                        icon={<Icon.MortarboardFill />}
                    >
                        <h6 className="vertical-timeline-element-title text-black">Bachelor of Science - Computer Science</h6>
                        <p className="text-black">Multimedia University of Kenya - Nairobi,Kenya</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Experience;
