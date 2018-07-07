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