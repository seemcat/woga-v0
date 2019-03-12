import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'

const LoadableComponent = Loadable({
	loader: () => import('./woga'),
	loading: Loading,
})

const LoadableWoga = () => <LoadableComponent />

export default LoadableWoga
