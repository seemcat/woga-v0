import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'

const LoadableComponent = Loadable({
	loader: () => import('./meditationForm'),
	loading: Loading,
})

const LoadableMeditationForm = () => <LoadableComponent />

export default LoadableMeditationForm
