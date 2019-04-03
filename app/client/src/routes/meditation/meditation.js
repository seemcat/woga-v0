import React from 'react'
import '../workout/workout.css'
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { 
	GET_MEDITATIONS
} from '../../db/queries';

const Meditation = () => (
	<Query query={GET_MEDITATIONS}>
	{({ loading, error, data }) => {
		if (loading) return 'Loding...';
		if (error) return `Error! ${error.message}`;

		console.log("data: ", data);
		return (
			<div className="woga-body">
			<div className="woga-title">
			<div className="woga-item">MEDITATIONS</div>
			</div>
			<div className="woga-item woga-subtitle"><Link to="/meditationform" className="active">
			Add a new guided meditation.
			</Link></div>
			<div className="woga-section">
			(THIS IS WHERE THE LIST OF GUIDED MEDITATIONS WILL GO)
			</div>
			</div>

		);
	}}
	</Query>
);

export default Meditation 
