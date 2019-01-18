const appRoot = document.getElementById('root');


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: ['option one', 'option two'],
            title: props.title,
            subtitle: props.subtitle
        }
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this)
        this.handleRandomDecisions = this.handleRandomDecisions.bind(this)
        this.handleNewOption = this.handleNewOption.bind(this)
    }

    handleRemoveOptions() {
        this.setState(()=> ({options:[]}))
    }

    handleRandomDecisions() {
        const random = Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[random])
    }

    handleNewOption(e) {
        e.preventDefault()
        const newOption = e.target.elements.option.value
        if(newOption) {
            this.setState((prevState) => ({options:prevState.options.concat(newOption)}))
            e.target.elements.option.value = ''
        }  
    }

    render() {

        return(
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action hasOptions={!this.state.options.length > 0} randomDecision={this.handleRandomDecisions}/>
                <Options options={this.state.options} removeOptions={this.handleRemoveOptions}/>
                <AddOption newOption={this.handleNewOption}/>
            </div>
        )
    }
}

const Header = (props) => {
    return(
        <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
    )
}

const Action = props => {
    return   (
        <button disabled={props.hasOptions} onClick={props.randomDecision}>Random Decision</button>
    )
}

const Options = props => {
    return (
        <div>
        <button onClick={props.removeOptions}>Remove All</button>
        {props.options.map(option => <Option key={option} text={option}/>)}
        </div>
   )
}

const Option = props => {
    return  <p>{props.text}</p>
}

class AddOption extends React.Component {

    render() {
     return   (
         <form onSubmit={this.props.newOption}>
            <input type='text' name='option'></input>
            <button>Submit</button>
         </form>
     )
    }
}


IndecisionApp.defaultProps = {
    options: [],
    title: 'Indecision App',
    subtitle: 'Lets do it!'
}

ReactDOM.render(<IndecisionApp/>, appRoot)
