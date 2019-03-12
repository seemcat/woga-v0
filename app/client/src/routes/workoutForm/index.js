import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'

const LoadableComponent = Loadable({
	loader: () => import('./workoutForm'),
	loading: Loading,
})

const LoadableWorkoutForm = () => <LoadableComponent />

export default LoadableWorkoutForm
