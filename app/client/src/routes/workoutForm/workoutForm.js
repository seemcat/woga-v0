import React from 'react'
import './workoutForm.css'
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql, compose, Mutation } from 'react-apollo';
import { 
	//	UPDATE_WORKOUT_FORM_TOGGLE_VALUE,
	ADD_WORKOUT,
	ADD_ROUTINE
} from '../../db/mutations';
import '../workout/workout.css'

@compose(
	graphql(ADD_ROUTINE, { name: 'addRoutine' }),
	graphql(ADD_WORKOUT, { name: 'addWorkout' })
)
class WorkoutForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			target: '',
			routines: [],
		};

	}

	addAnotherRoutine = (event) => {
		let routine = {
			title: '',
			reps: 0,
			giffUrl: ''
		};

		this.state.routines.push(routine);
		this.setState({ routines: this.state.routines });
	}

	removeRoutine = (event) => {
		this.state.routines.splice(event.target.id, 1);
		this.setState({ routines: this.state.routines });
	}

	handleChangeOnRoutine = (event) => {
		let routineObj = this.state.routines[event.target.id];
		routineObj[event.target.name] = event.target.value;
		this.setState({ routines: this.state.routines });
	}

	handleChange = (event) => {
		let routineToChange = this.state.routines[event.target.key];
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = () => {
		/* UPDATE THE WORKOUTS TABLE */
		this.props.addWorkout({
			variables: {
				title: this.state.title,
				target: this.state.target,
			},
		}).then(({ data }) => {

			/* UPDATE THE ROUTINES TABLE */
			this.state.routines.forEach((routine) => {
				this.props.addRoutine({
					variables: {
						workout_id: data.addWorkout.id,
						title: routine.title,
						reps: routine.reps,
						giffUrl: routine.giffUrl
					},
				}).then(({ data }) => {
					console.log('got data from mutating routines table: ', data);
				}).catch((error) => {
					console.log('there was an error mutating routines table: ', error);
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
			<div className="woga-item">Title: <input type="text" value={this.state.title} name="title" onChange={this.handleChange} /></div>
			<div className="woga-item">Target: <input type="text" value={this.state.target} name="target" onChange={this.handleChange} /></div>

			<div className="woga-item">Routines: <button onClick={this.addAnotherRoutine}>+</button></div>
			{ this.state.routines.map((routine, idx) => (
				<div className="woga-section" key={idx}>
				<div className="woga-item">Title: <input type="text" value={this.state.routines[idx].title} name={"title"} id={idx} onChange={this.handleChangeOnRoutine} /></div>
				<div className="woga-item">Reps: <input type="text" value={this.state.routines[idx].reps} name={"reps"} id={idx} onChange={this.handleChangeOnRoutine} /></div>
				<div className="woga-item">GiffUrl: <input type="text" value={this.state.routines[idx].giffUrl} name={"giffUrl"} id={idx} onChange={this.handleChangeOnRoutine} /></div>
				<div className="woga-item"><button onClick={this.removeRoutine} id={idx}>-</button></div>
				</div>
			)) }
			</div>
			<div className="woga-section">
			<div className="woga-item"><button onClick={this.handleSubmit}>Submit</button></div>
			<div className="woga-item"><Link to="/workout" className="active">Cancel</Link></div>
			</div>
			</div> 
		)
	}
}

export default WorkoutForm



//<div><button>ADD ANOTHER ROUTINE</button></div>
// MUTATION COMPONENT TO UPDATE WORKOUT FORM TOGGLE VALUE
/* <Mutation 
mutation={UPDATE_WORKOUT_FORM_TOGGLE_VALUE}
update={(cache, { data: { updateWorkoutFormToggleValue} }) => {
	const { isDisplayingWorkoutForm } = cache.readQuery({ query: GET_WORKOUT_FORM_TOGGLE_VALUE });
	console.log("isDisplayingWorkoutForm: ", isDisplayingWorkoutForm);
	cache.writeQuery({
		query: GET_WORKOUT_FORM_TOGGLE_VALUE,
		data: { isDisplayingWorkoutForm: !isDisplayingWorkoutForm },
	});
}}
	>
	{ (updateWorkoutFormToggleValue, isDisplayingWorkoutForm) => (

		// QUERY COMPONENT TO GET ROUTINES
		<Query query={GET_ROUTINES}>
		{({ loading, error, data }) => {
			if (loading) return 'Loding...';
			if (error) return `Error! ${error.message}`;

			let map = {};
			let routines = data.getRoutines;

// map routines to workouts
			for (let i = 0; i < routines.length; i++) {
				let val = <div key={i}>Title: {routines[i].title}, Reps: {routines[i].reps}, GiffUrl: {routines[i].giffUrl}</div>
					if (!map[routines[i].workout_id]) {
						map[routines[i].workout_id] = [val];
					} else {
						map[routines[i].workout_id].push(val);
					}

			}

// build array of workouts which include appropriate routines
			const listOfWorkouts = workoutData.getWorkouts.map((currVal, idx) =>
				<div key={idx}>
				<div>Target: {currVal.target}, Title: {currVal.title}</div>
				{map[currVal.id]}
				---
				</div>
			);

			return (
				<Query query={GET_WORKOUT_FORM_TOGGLE_VALUE}>
				{({ data: { isDisplayingWorkoutForm } }) => (
					<div>
					<div><h1>WORKOUT PAGE</h1></div>

					<div>
					<button
					onClick={updateWorkoutFormToggleValue}
					>
					ADD NEW WORKOUT
					</button>
					</div>

					<Link to="/resources" className="active">Get Started</Link>
					{ isDisplayingWorkoutForm ? 
						<div>
						<div>Title: <input type="text"></input></div>
						<div>Target: <input type="text"></input></div>
						<div>Routines: </div>

						<div>Title: <input type="text"></input></div>
						<div>Reps: <input type="text"></input></div>
						<div>GiffUrl: <input type="text"></input></div>
						<div><button>ADD ANOTHER ROUTINE</button></div>

						<div><button>SUBMIT</button><button>CANCEL</button></div>
						</div> 
						: "" }
					{listOfWorkouts}
					</div>
				)}
				</Query>
			);
		}}
		</Query>
	)}
	</Mutation>*/

// refetchQueries: ['GetNotTodos']
