import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'

const LoadableComponent = Loadable({
	loader: () => import('./workout'),
	loading: Loading,
})

const LoadableWorkout = () => <LoadableComponent />

export default LoadableWorkout
