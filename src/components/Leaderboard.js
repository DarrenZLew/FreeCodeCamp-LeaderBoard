import React from 'react';
import './Leaderboard.css';
import LeaderboardRowItem from './LeaderboardRowItem';
import LeaderboardHeader from './LeaderboardHeader';

const Leaderboard = props => {
		let data;
		props.column === "days30" ? data = props.days30 : data = props.alltime;
		let leaderboardRowItems;
		let id = 0;
		leaderboardRowItems = data.map(leaderboardRowItem => {
			id++;
			return (
				<LeaderboardRowItem key={id} leaderboardRowItem={leaderboardRowItem} id={id} />
			)
		});

		return (
			<table>
				<LeaderboardHeader onSelectColumn={props.onSelectColumn} />
				<tbody>
					{leaderboardRowItems}
				</tbody>		
			</table>
		)
}

export default Leaderboard;