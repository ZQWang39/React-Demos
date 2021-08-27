import React, {useState} from 'react';
import Counter from './Counter'

const Demo = () => {
    const [showCounter, setCounter] = useState(false)

    const handleCounter = () => {

        setCounter(!showCounter)
    }
 

    return (
        <div className="demo-container">
            <h1>Our App</h1>
            <button onClick={handleCounter}>{showCounter?'Hide Counter':'Show Counter'}</button>
            {
                showCounter ? 
                ( <Counter />):null
            }
           
        </div>
    )
}

export default Demo
