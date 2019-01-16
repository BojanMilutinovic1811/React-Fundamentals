const appRoot = document.getElementById('root');


class IndecisionApp extends React.Component {
    render() {

        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of the computer';
        const options = ['one', 'two', 'three'];

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return(
            <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
        </div>
        )

    }
}

class Action extends React.Component {
    render() {
     return   <div>Action</div>
    }
}

class Options extends React.Component {
    render() {
       return (
           this.props.options.map(option => <Option key={option} text={option}/>)
       )
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
     return   <div>add option</div>
    }
}


ReactDOM.render(<IndecisionApp/>, appRoot)
