import { Switch, Route, Redirect, Router } from 'react-router-dom'

import { isPrivate } from '../config/auth'
import history from '../config/history'

import Home from '../views/home'
import Stack from '../views/stack'
import Contact from '../views/contact'
import SignIn from '../views/signin'
import Register from '../views/register'

import Error404 from '../views/errors/404'
import Layout from '../components/Layout'

const Auth = ({ ...rest }) => {
  if (!isPrivate()) {
    return <Redirect to="/signin" />
  }
  return <Route {...rest} />
}

const Routers = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Auth exact path="/" component={Home} />
        <Auth exact path="/stacks/:id" component={Stack} />
        <Auth exact path="/contact" component={Contact} />

        <Auth exact to="/error/404" component={Error404} />
        <Redirect from="*" to="/error/404" />
      </Switch>
    </Layout>
  </Router>
)

export default Routers
