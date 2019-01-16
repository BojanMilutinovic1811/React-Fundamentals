const appRoot = document.getElementById('root');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: []
}

const addOption = (e) => {
    e.preventDefault()
    let option = e.target.elements.option.value;
    if(option) {
        app.options.push(option)
        renderTemplate()
        e.target.elements.option.value = ''
    } else {
        console.log('please insert an option');
    }
}

const removeAll = () => {
    app.options.length = 0; 
    renderTemplate()
}

const makeDecision = () => {
    let option = Math.floor(Math.random() * app.options.length)
    console.log(option);
}

const renderTemplate = () => {
    const template = (
        <div>
         <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <h3>Here are your options</h3>
            {(app.options.length > 0) 
            ? <ul>{app.options.map(option => <li key='option'>{option}</li>)}</ul> 
            : <p>no options</p>}
        <button disabled={app.options.length === 0}onClick={makeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove all</button>
        <form onSubmit={addOption}>
        <input type='text' name='option'></input>
        <button>Add option</button>
        </form>
        </div>
        )
    
        ReactDOM.render(template, appRoot)
}

renderTemplate()


