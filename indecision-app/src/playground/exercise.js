class Counter extends React.Component {
constructor(props) {
    super(props); 
    this.handleIncrease = this.handleIncrease.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleReset = this.handleReset.bind(this)
   
    this.state = {
        count: 0
    };
}



    handleIncrease() {
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    handleDecrease() {
        this.setState((prevState)=> {
            return {
                count: prevState.count -1
            }
        })
    }
    handleReset() {
        this.setState((prevState)=>{
            return {
                count:0
            }
        })
    }

    render() {
        console
        return(
            <div>
            <h1>Counter: {this.state.count} </h1>
            <button onClick={this.handleIncrease}>+1</button>
            <button onClick={this.handleDecrease}>-1</button>
            <button onClick={this.handleReset}>reset</button>
        </div>
        )
    }
}


ReactDOM.render(<Counter/>, document.getElementById('root'))

