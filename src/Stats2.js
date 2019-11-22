import React, { Component } from 'react';

export default class Stats2 extends Component {
	render() {
		const { stats } = this.props;
		return (
			<div className="stats-container">
				<table>
					<tr>
						<th>Top commenter</th>
						<th>Most prolific day</th>
						<th>Inquriers on my side</th>
					</tr>
					<tr>
						<td>Abujee</td>
						<td>02/11/2019</td>
						<td>21%</td>
					</tr>
				</table>
			</div>
		);
	}
}
