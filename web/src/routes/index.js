import { Switch, Route, Redirect, Router } from 'react-router-dom'
import { isPrivate } from '../config/session'
import history from '../config/history'


import Layout from '../components/Layout'
import Register from '../pages/Register'
import SignIn from '../pages/Auth/SignIn'
import Contact from '../pages/Contact'
import Stack from '../pages/Stack'
import Team from '../pages/Teams'
import Error404 from '../pages/Error/Error404'
import Projects from '../pages/Projects'


const Auth = ({ ...rest }) => {
  if (!isPrivate()) {
    return <Redirect to="/signin" />
  }

  return <Route {...rest} />
}

const Routes = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />

        <Auth exact path="/" component={Stack} />
        <Auth exact path="/stacks/:id/projects" component={Projects} />
        <Auth exact path="/projects/:id/teams" component={Team} />

        <Auth to="/error/404" exact component={Error404} />
        <Redirect from="*" to="/error/404" />
      </Switch>
    </Layout>
  </Router>
)

export default Routes
