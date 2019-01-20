import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Main from './secondComponents/Main'
import About from './secondComponents/About'
import Products from './secondComponents/Products'
import NoMatch from './secondComponents/NoMatch'
import Header from './secondComponents/layout/Header'
import Footer from './secondComponents/layout/Footer'
import './ExerciseRouter.css'

class ExerciseRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div className="container">
            <Header/>
            
            <Switch>
                <Route path='/' exact={true} component={Main}/>
                <Route path='/about'component={About}/>
                <Route path='/products' component={Products}/>
                <Route component={NoMatch}/>
            </Switch>
            <Footer/>
            </div>

            </BrowserRouter>
        )
    }
}



export default ExerciseRouter