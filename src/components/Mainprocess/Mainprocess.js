import React, { Component } from 'react';
import Section from '../Section';
import villains from "../../villain.json";
import "./Mainprocess.css";

class Mainprocess extends Component {
	state = {
		villains,
		message: "Click one of the logos to begin!",
		score: 0,
		topScore: 0
	};
	
	handleClick = (id, clicked) => {

		const villainsOrder = this.state.villains;

		if (clicked) {
			villainsOrder.forEach((villains, index) => {
				villainsOrder[index].clicked = false;
			});
			return this.setState({
				villains: villainsOrder.sort(() => Math.random() - 0.5),
				message: "Villains win one over you!",
				score: 0
			})
		}
		else {
			villainsOrder.forEach((villains, index) => {
				if (id === villains.id) {
					villainsOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				villains: villainsOrder.sort(() => Math.random() - 0.5),
				message: "You Guessed Correctly!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid">
			<div className="gameMessage text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="gameScores text-center">
						<p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
					</div>
				<div className="container">
					
					<div className="row">
					{this.state.villains.map(villains => (
						<Section
							key={villains.id}
							id={villains.id}
							name={villains.name}
							clicked={villains.clicked}
							image={villains.image}
							handleClick={this.handleClick}
							/>
					))}
					</div>
					
				</div>
			</div>
		);
	}
};

export default Mainprocess;