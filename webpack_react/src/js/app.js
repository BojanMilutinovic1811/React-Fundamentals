import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
            <div>hello fucking world</div>
            <h1>What the fuck!</h1>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))