const app = document.getElementById('root');

let visible = false;
const visibility = () => {
    visible = !visible;
    renderApp()
    console.log(visible)
}


const renderApp = () => {
    const visibilityToggle = (
        <div>
        <button onClick={visibility}>visibility toggle</button>
        {visible && <p>this is now visible</p>}
        </div>
    )
    
ReactDOM.render(visibilityToggle, app)
}

renderApp()



