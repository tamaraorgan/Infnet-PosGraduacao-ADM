import { Switch, Route } from 'react-router-dom'

import Home from './views/home'
import Stack from './views/stack'
import Contact from './views/contact'

import Layout from './components/Layout'

const Router = () => (
  <Switch>
    <Layout>
      <Route path="/" exact component={Home} title="HOME" />
      <Route path="/:stack/:id/" component={Stack} title="STACK" />
      <Route path="/contact" component={Contact} title="CONTATO" />
    </Layout>
  </Switch>
)

export default Router
