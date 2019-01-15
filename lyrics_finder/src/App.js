import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Lyrics from './components/tracks/Lyrics';
import About from './components/about/About'

import { Provider } from './context';
 
 

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <React.Fragment>
         <Header />
         <Switch>
           <Route exact path='/' component={Main}/>
           <Route exact path='/lyrics/track/:id' component={Lyrics} />
           <Route exact path='/about' component={About}/>
         </Switch>
         <Footer />
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
