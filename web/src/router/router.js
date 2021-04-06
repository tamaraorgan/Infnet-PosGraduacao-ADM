import { Switch, Route, Redirect } from 'react-router-dom'

import { isPrivate } from '../config/auth'

import Layout from '../components/Layout'

import Home from '../views/home'
import Stack from '../views/stack'
import Contact from '../views/contact'
import SignIn from '../views/signin'
import Register from '../views/register'

import Error404 from '../views/errors/404'


const Auth = ({ ...rest }) => {
  if (!isPrivate()) {
    return <Redirect to="/signin" />
  }
  return <Route {...rest} />
}

const Router = () => (
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
)

export default Router
