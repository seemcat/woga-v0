import React from 'react'
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql, compose, Mutation } from 'react-apollo';
import { 
	ADD_TEMP_WORKOUT,
	MAP_WORKOUT_TO_TARGET,
} from '../../db/mutations';
import '../workout/workout.css'
import './workoutForm.css'

@compose(
	graphql(MAP_WORKOUT_TO_TARGET, { name: 'mapWorkoutToTarget' }),
	graphql(ADD_TEMP_WORKOUT, { name: 'addTempWorkout' }),
)
class WorkoutForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			giffUrl: '',
			targets: {
				abs: false,
				arms: false,
				back: false,
				buttocks: false,
				cardio: false,
				chest: false,
				hips: false,
				legs: false,
				shoulders: false,
			},
		};

	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}


	toggleMuscle = ({ target: { value: muscle }}) => {
		let res = this.state.targets[muscle] ? false : true;
		this.setState({ targets: Object.assign({}, this.state.targets, {[muscle]: res}) });
	}

	handleSave = () => {
		// Grab the selected muscles
		const allMuscles = this.state.targets;
		const selectedMuscles = Object.keys(allMuscles).filter(muscle => allMuscles[muscle]);

		// UPDATE THE TEMP WORKOUTS TABLE 
		this.props.addTempWorkout({
			variables: {
				title: this.state.title,
				giffUrl: this.state.giffUrl,
				targets: selectedMuscles,
			},
		}).then(({ data }) => {

			// UPDATE ALL MUSCLE TABLES 
			selectedMuscles.forEach((muscle) => {
				this.props.mapWorkoutToTarget({
					variables: {
						workoutKey: data.addTempWorkout.id,
						targetName: muscle,
					},
				}).then(({ data }) => {
					console.log('got data from mutating muscles table: ', data);
				}).catch((error) => {
					console.log('there was an error mutating muscles table: ', error);
				})
			});

		}).catch((error) => {
			console.log('there was an error mutating workouts table: ', error);
		});
	}

	render() {

		return (
			<div className="woga-body">
			<div className="woga-title">
			<div className="woga-item">NEW WORKOUT, WHO DIS?</div>
			</div>
			<div className="woga-section">
			<div>
			Title: <input type="text" value={this.state.title} name="title" onChange={this.handleChange} />
			</div>
			<div>
			GiffUrl: <input type="text" value={this.state.giffUrl} name="giffUrl" onChange={this.handleChange} />
			</div>
			<div>
			Target Muscles: {
				Object.keys(this.state.targets).map((muscle, idx) => {
					const state = this.state.targets[muscle] ? 'yes' : 'no';
					return <button className={state} key={idx} value={muscle} onClick={this.toggleMuscle}>{muscle}</button>;
				})
			}
			</div>
			</div>

			<div className="woga-section">
			<div className="woga-item"><button onClick={this.handleSave}>Save</button></div>
			<div className="woga-item"><Link to="/admin" className="active">Cancel</Link></div>
			</div>
			</div> 
		)
	}
}

export default WorkoutForm
