import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './views/home'
import Stack from './views/stack'
import Contact from './views/contact'

import Error404 from './views/errors/404'

const Router = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/stacks/:id" exact component={Stack} />
      <Route path="/contact" exact component={Contact} />

      <Route to="/error/404" exact component={Error404} />
      <Redirect from="*" to="/error/404" />
    </Switch>
  </Layout>
)

export default Router
