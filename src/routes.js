import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header'
import Filme from './pages/Filme';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header 
        classnameHome='home__film'
        classnameFav='favoritos__film'
      />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/filme/:id" component={Filme} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;