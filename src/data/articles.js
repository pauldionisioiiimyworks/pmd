import React from "react";

function article_1() {
	return {
		date: "30 July 2024",
		title: "5 Reasons Why Online Learning is the Future of Education in 2024",
		description:
			"Traditional education has changed radically within the last couple of years. Find out why online learning is a great choice for getting a quality education whenever and wherever you want.",
		link: "https://www.educations.com/articles-and-advice/5-reasons-online-learning-is-future-of-education-17146",
		keywords: [
			"Online Learning",
			"Future of Education",
			"5 Reasons Why Online Learning",
			"Education in 2024",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "28 April 2024",
		title: "The future of learning: How AI is revolutionizing education 4.0",
		description:
			"With increasing interest in AI and education, the Education 4.0 Alliance sought to understand the current state and future promises of the technology for education. The latest report – Shaping the Future of Learning: The Role of AI in Education 4.0 – shows four key promises that have emerged for AI to enable Education 4.0:",
		link: "https://www.weforum.org/agenda/2024/04/future-learning-ai-revolutionizing-education-4-0/",
		style: ``,
		keywords: [
			"How AI is revolutionizing education 4.0",
			"AI is revolutionizing education 4.0",
			"future of learning",
			"revolutionizing education 4.0",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
