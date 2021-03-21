import { Switch, Route } from 'react-router-dom'

import Home from './views/home'
import Stack from './views/stack'
import Contact from './views/contact'

import Layout from './components/Layout'

const Router = () => (
  <Switch>
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/:stack/:id/" component={Stack} />
      <Route path="/contact" component={Contact} />
    </Layout>
  </Switch>
)

export default Router
