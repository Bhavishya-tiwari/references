import './App.css'

function App() {
    let counter = 15
    const addValue = () => {
        console.log(counter);
        counter = counter + 1
    }
    const removeValue = () => {
        console.log(counter);
        counter = counter - 1
    }

    return (
        <>
            <h1>React course with hitesh {counter}</h1>
            <h2>Counter value : {counter} </h2>
            <button
                onClick={addValue}
            >Add value</button> {" "}
            <button
                onClick={removeValue}
            >remove value</button>
            <p>footer: {counter}</p>
        </>
    )
}
export default App
