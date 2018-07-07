

let count=0;

const addOne = () => {
    count++;
    renderCounterApp();
    console.log(count);
}

const minusOne = () => {
    count--;
    renderCounterApp();
    console.log(count);
}

const reset = () => {
    count = 0;
    renderCounterApp();
    console.log(count);
}

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo,appRoot);
}

var appRoot = document.getElementById("app");

renderCounterApp();