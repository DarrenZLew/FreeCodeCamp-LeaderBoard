import React from 'react';
import './Leaderboard.css';

const LeaderboardHeader = props => {
	return (
		<thead>
			<tr>
				<th className="title" colSpan="4">freeCodeCamp Leaderboard</th>
			</tr>
			<tr>
				<th>#</th>
				<th>Camper Name</th>
				<th onClick={() => props.onSelectColumn("days30")} >Points in past 30 days</th>
				<th onClick={() => props.onSelectColumn("alltime")} >All time points</th>
			</tr>	
		</thead>		
	)
}

export default LeaderboardHeader; 