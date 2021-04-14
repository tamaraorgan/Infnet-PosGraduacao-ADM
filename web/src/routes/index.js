import { Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'

import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import Contact from '../pages/Contact'
import Stack from '../pages/Stack'
import Team from '../pages/Teams'
import Error404 from '../pages/Error'

import Modal from '../components/Modal'

const Routes = () => (
  <Switch>
    <Layout>
      <Route exact path="/" component={Stack} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/stacks/:id/teams" component={Team} />
      <Route exact path="/contact" component={Contact} />

      <Route exact path="/error/404" component={Error404} />

      <Route exact path="/modal" component={Modal} />
    </Layout>
  </Switch>
)

export default Routes
