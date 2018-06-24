import React from "react";
import "./Section.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

const Section = props => (
	<div 
	className="allCards" 
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.id}
		src={props.image}
		alt={props.name}
		/>
	</div>
);

export default Section;
