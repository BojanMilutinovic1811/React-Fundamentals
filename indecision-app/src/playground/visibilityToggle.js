

// let visible = false;
// const visibility = () => {
//     visible = !visible;
//     renderApp()
//     console.log(visible)
// }


// const renderApp = () => {
//     const visibilityToggle = (
//         <div>
//         <button onClick={visibility}>visibility toggle</button>
//         {visible && <p>this is now visible</p>}
//         </div>
//     )


// renderApp()

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }
        this.visibilityHandle = this.visibilityHandle.bind(this)
    }

    visibilityHandle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.visibilityHandle}>Toggle</button>
                {this.state.visibility && <p>It's a kind of magic!</p>}
            </div>
        )
    }

}

    
ReactDOM.render(<VisibilityToggle/>, document.getElementById('root'))

