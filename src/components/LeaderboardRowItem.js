import React from 'react';
import './Leaderboard.css';

const LeaderboardRowItem = props => {
	return (
		<tr>
			<td>{props.id}</td>
			<td><img src={props.leaderboardRowItem.img} alt="Camper img" /> <a href={'https://www.freecodecamp.org/'+props.leaderboardRowItem.username} target="_blank">{props.leaderboardRowItem.username}</a></td>
			<td>{props.leaderboardRowItem.recent}</td>
			<td>{props.leaderboardRowItem.alltime}</td>
		</tr>
	);
}

export default LeaderboardRowItem;