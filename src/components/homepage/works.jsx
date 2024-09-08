import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="../quizwhiz-logo.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">@QuizWhizTimeReal</div>
							<div className="work-subtitle">
								Content Creator
							</div>
							<div className="work-duration"></div>
						</div>

						<div className="work">
							<img
								src="../pmd.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">pmd</div>
							<div className="work-subtitle">
								Content Creator
							</div>
							<div className="work-duration"></div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
