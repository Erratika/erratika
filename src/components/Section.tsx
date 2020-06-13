import React from "react";
import "../styles/Section.scss";

function Section(props: { title: string; sectionContent: JSX.Element }) {
	return (
		<section className="section">
			<h1>{props.title}</h1>
			{props.sectionContent}
		</section>
	);
}

export default Section;
