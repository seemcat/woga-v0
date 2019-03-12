import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import NotFound from './notFound'
import NavBar from './navBar'
import About from './about'
import Workout from './workout'
import WorkoutForm from './workoutForm'
import Meditation from './meditation'
import Woga from './woga'
import Resources from './resources'

class AppRouter extends React.Component {
	render() {
		return (
			<Router>
			<div>
			<NavBar />
			<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
			<Route exact path='/workout' component={Workout} />
			<Route exact path='/workoutForm' component={WorkoutForm} />
			<Route exact path='/meditation' component={Meditation} />
			<Route exact path='/woga' component={Woga} />
			<Route exact path='/resources' component={Resources} />
			<Route exact component={NotFound} />
			</Switch>
			</div>
			</Router>
		)
	}
}

export default AppRouter;
