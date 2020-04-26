import React, { Component, Suspense } from 'react'
import LazyLoad from './LazyLoad'

const Imgs = React.lazy(() => import('./imgs'))
export default class CodeSplit extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <h1>CodeSpliting</h1>
        {/* Suspense组件，可以包裹懒加载组件，
          fallback属性接受在组件加载过程中展示的React元素
         */}
        <Suspense fallback={<LazyLoad />}>
          <Imgs />
        </Suspense>
      </div>
    )
  }
}
