import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'

const LoadableComponent = Loadable({
	loader: () => import('./about'),
	loading: Loading,
})

const LoadableAbout = () => <LoadableComponent />

export default LoadableAbout
