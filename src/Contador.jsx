import { useState } from "react"
import "./contador.css"

function Contador() {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Contador: {count}</h1>
            <div className="countDiv">
                <button id="add" onClick={() => setCount(count + 1)}>+</button>
                <button id="dell" onClick={() => setCount(count - 1)}>-</button>
            </div>
        </>
    )
}

export default Contador