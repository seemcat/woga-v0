import React from 'react'
import { Query } from 'react-apollo';
import { 
	GET_TEMP_WORKOUTS
} from '../../db/queries';
import { Link } from 'react-router-dom';
import './admin.css'

const Admin = () => (
	<Query query={GET_TEMP_WORKOUTS}>
	{({ loading, error, data }) => {
		if (loading) return 'Loading...';
		if (error) return `Error! ${error.message}`;

		const workouts = data.getTempWorkouts.map((workout, idx) =>
			<div key={idx}>
			<div>{workout['title']}</div>
			<div>{workout['giffUrl']}</div>
			<div>{workout['targets']}</div>
			</div>
		);

		return (
			<div>
			<div>ADMIN PAGE</div>
			<div><Link to="/workoutform">ADD A NEW WORKOUT</Link></div>
			<div>
			{ workouts }
			</div>
			</div>
		)
	}}
	</Query>
)

export default Admin
