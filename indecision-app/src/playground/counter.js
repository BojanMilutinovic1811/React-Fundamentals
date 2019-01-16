const appRoot = document.getElementById('root');


let counter = 0;
const addOne = () => {
counter++
renderCount()
}
const subtractOne = () => {
    counter--
    renderCount()
}
const reset = () => {
    counter = 0
    renderCount()
}
const renderCount = () => {

    const count = (
        <div>
            <h2>Count: {counter}</h2>
            <button onClick={addOne}>+1</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    console.log('hello');
    ReactDOM.render(count, appRoot)
    
}
renderCount()