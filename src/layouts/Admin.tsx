import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// reactstrap components
import { Container } from 'reactstrap'
// core components
import AdminNavbar from 'components/Navbars/AdminNavbar'
import AdminFooter from 'components/Footers/AdminFooter'
import Sidebar from 'components/Sidebar/Sidebar'

import routes from 'routes'
import { IRoute, ILocation } from 'interfaces'

interface IProps {
  location: ILocation
}

class Admin extends React.Component<IProps> {
  componentDidUpdate(e: IProps) {
    document.documentElement.scrollTop = 0
    if (document.scrollingElement) document.scrollingElement.scrollTop = 0
    ;(this.refs.mainContent as Element).scrollTop = 0
  }
  getRoutes = (routes: IRoute[]) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/dashboard') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }
  getBrandText = (path: string) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name
      }
    }
    return 'Brand'
  }
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: '/dashboard',
            imgSrc: require('assets/img/brand/react.png'),
            imgAlt: '...',
          }}
        />
        <div className='main-content' ref='mainContent'>
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from='*' to='/dashboard/index' />
          </Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    )
  }
}

export default Admin
