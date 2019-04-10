import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/loading'

const LoadableComponent = Loadable({
  loader: () => import('./admin'),
  loading: Loading,
})

const LoadableAdmin = () => <LoadableComponent />

export default LoadableAdmin
