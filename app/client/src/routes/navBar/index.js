import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'

const LoadableComponent = Loadable({
	loader: () => import('./navBar'),
	loading: Loading,
})

const LoadableNavBar = () => <LoadableComponent />
export default LoadableNavBar
