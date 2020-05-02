import * as React from 'react'
import { ConnectedComponent } from 'react-redux'

export interface IRoute {
  path: string
  name: string
  icon: string
  component: typeof React.Component | ConnectedComponent<any, any>
  layout: string
}
