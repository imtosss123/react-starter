import AuthLogin from 'views/auth/Login'
import AuthRegister from 'views/auth/Register'
import DashboardIndex from 'views/dashboard/Index'
import DashboardProfile from 'views/dashboard/Profile'
import DashboardMaps from 'views/dashboard/Maps'

import { IRoute } from './interfaces/route'

const routes: IRoute[] = [
  // auth
  {
    path: '/login',
    name: 'Login',
    component: AuthLogin,
    icon: 'ni ni-key-25 text-info',
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'ni ni-circle-08 text-pink',
    component: AuthRegister,
    layout: '/auth',
  },
  // dashboard
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: DashboardIndex,
    layout: '/dashboard',
  },
  {
    path: '/profile',
    name: 'User Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: DashboardProfile,
    layout: '/dashboard',
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'ni ni-pin-3 text-orange',
    component: DashboardMaps,
    layout: '/dashboard',
  },
]

export default routes
