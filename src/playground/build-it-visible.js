class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{(this.state.visibility ? "Hide Details" : "Show Details")}</button>
                {this.state.visibility && <p>Player test</p>}   
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"));

/*
let visibility = false;

const visibilityCheck = () => {
   visibility = !visibility; 
   render();
}

const render = () => {
    const jsx = (
        <div>        
            <h1>Visibility Toggle</h1>
            <button onClick={visibilityCheck}>{(visibility ? "Hide Details" : "Show Details")}</button>
            {visibility && <p>Player test</p>}
        </div>
    );

    ReactDOM.render(jsx,document.getElementById("app"));
    
}

render();

*/