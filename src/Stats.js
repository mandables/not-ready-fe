import React, { Component } from 'react';

export default class Stats extends Component {
	render() {
		const { stats } = this.props;
		return (
			<div className="stats-container">
				<div className="stat" id="stat-one">
					<p id="title">Top commenter</p>
					<br />
					<p>Abujee</p>
				</div>
				<div className="stat" id="stat-two">
					<p id="title">Most prolific day</p>
					<br />
					<p id="date">02/11/2019</p>
				</div>
				<div className="stat" id="stat-three">
					<p id="title">Inquirers on my side</p>
					<br />
					<p>21%</p>
				</div>
			</div>
		);
	}
}
