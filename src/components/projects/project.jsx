import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPlay } from "@fortawesome/free-solid-svg-icons";
import MovieClip from "../homepage/movieclip";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description"><MovieClip /></div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faPlay} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
