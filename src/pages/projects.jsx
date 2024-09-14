import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
						Where Fun Meets Learning: A World of Creative Kids’ Content
						</div>

						<div className="subtitle projects-subtitle">
						Quizmaster Quinn is a passionate Quiz content creator with a knack for children storytelling. With a focus on educational entertainment, Quizmaster Quinn consistently delivers high-quality, engaging, and informative content that resonates with kids learning.
						With a growing community of @QuizWhizTimeReal, Quizmaster Quinn aims to inspire, educate and entertain through interactive channel. 
						Known for educational value, Quizmaster Quinn's content stands out for unique selling point.
						When not creating content, Quizmaster Quinn enjoys music, which often inspire fresh and relatable ideas for @QuizWhizTimeReal followers. Follow @QuizWhizTimeReal for regular updates on quiz show and join the conversation!
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
