import React from "react";
import "./Section.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

const Section = props => (
	<div class="row">
		<div class="column images"
			key={props.id}
			onClick={() => props.handleClick(props.id, props.clicked)}
			>
			<img 
				id={props.id}
				src={props.image}
				alt={props.name}
				width="250px"
				height="250px"
			/>
		</div>
	</div>
);

export default Section;
