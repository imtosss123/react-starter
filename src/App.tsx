import React from 'react'
import {
  Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom'
import { history } from 'helpers'
import { connect } from 'react-redux'
import { RootState } from '_redux/rootReducer'
import Snackbar from 'components/Main/Snackbar'
// layouts
import AuthLayout from 'layouts/Auth'
import AdminLayout from 'layouts/Admin'

// styling
import './index.scss'
import 'assets/plugins/nucleo/css/nucleo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'assets/scss/argon-dashboard-react.scss'

function App(props?: IProps) {
  if (!props) {
    return null
  }

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route
            path='/dashboard'
            render={(props) => <AdminLayout {...props} />}
          />
          <Route path='/auth' render={(props) => <AuthLayout {...props} />} />
          <Redirect from='/' to='/dashboard/index' />
        </Switch>
      </Router>
      <Snackbar />
    </>
  )
}

interface IProps extends RouteComponentProps<void> {}

function mapStateToProps(state: RootState) {
  return {}
}

export default connect(mapStateToProps)(App)
