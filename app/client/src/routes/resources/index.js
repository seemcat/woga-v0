import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'

const LoadableComponent = Loadable({
	loader: () => import('./resources'),
	loading: Loading,
})

const LoadableResources = () => <LoadableComponent />

export default LoadableResources
