import React from 'react'
import { Query } from 'react-apollo';
import { 
	GET_WORKOUT_FORM_TOGGLE_VALUE,
	GET_ROUTINES,
	GET_WORKOUTS
} from '../../db/queries';
import { Link } from 'react-router-dom';
import './workout.css'
import Routines from '../../components/Routines'

const Workout = () => (
	<Query query={GET_WORKOUTS}>
	{({ loading, error, data }) => {
		if (loading) return 'Loding...';
		if (error) return `Error! ${error.message}`;
		let workoutData = data;

		return (
			<Query query={GET_ROUTINES}>
			{({ loading, error, data }) => {
				if (loading) return 'Loding...';
				if (error) return `Error! ${error.message}`;

				let map = {};
				let routines = data.getRoutines;

				routines.forEach((routine, idx) => {
					if (!map[routine.workout_id]) {
						map[routine.workout_id] = [routine];
					} else {
						map[routine.workout_id].push(routine);
					}

				});

				// build array of workouts which include appropriate routines
				const listOfWorkouts = workoutData.getWorkouts.map((currVal, idx) =>
					<div className="woga-card" key={idx}>
					<div className="woga-card-title">Title: {currVal.title}, Target: {currVal.target}</div>
					<Routines routines={map[currVal.id]} idx={idx} />
					</div>
				);

				return (
					<div className="woga-body">
					<div className="woga-title">
					<div className="woga-item">WORKOUTS</div>
					</div>
					<div className="woga-item woga-subtitle"><Link to="/workoutform" className="active">
					🏋️‍♀️Add a new workout. 🍑
					</Link></div>
					<div className="woga-section">
					{ listOfWorkouts }
					</div>
					</div>
				)
			}}
			</Query>
		);
	}}
	</Query>
);

export default Workout 
