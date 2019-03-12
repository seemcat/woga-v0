import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'

const LoadableComponent = Loadable({
	loader: () => import('./meditation'),
	loading: Loading,
})

const LoadableMeditation = () => <LoadableComponent />

export default LoadableMeditation
