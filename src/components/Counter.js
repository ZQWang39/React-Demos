import React, {useState, useEffect} from 'react'


const Counter = () => {
    const [currentCount, setCount] = useState(0)


        //componentDidMount
    // useEffect(()=>{
    //     console.log('The use effect has been ran...')
    // }, [])
    
    //componentDidUpdate
    // useEffect(()=>{
    //     console.log('The use effect has been ran...')
    // }, [currentCount])

    //coponentWillUnmount
    // useEffect(()=>{
    //     console.log('The use effect has been ran...');
    //     return ()=>{
    //         console.log('The return is being ran...');
    //     }
    // }, [])

    useEffect(()=>{
        console.log(`The currentCount has been updated to ${currentCount}`);
        return ()=>{
            console.log(`We are in the clean-up, the count is ${currentCount}`)
        }
    },[currentCount])


    const handleIncrement = () => {
        setCount(currentCount + 1)
     }
     const handleDecrement = () => {
         setCount(currentCount - 1)
      }
    return (
        <div className="counter">
                <h2>counter</h2>
                <span>current count:{currentCount}</span>
                <div className="buttons">
                    <button className="increment" onClick={handleIncrement}>Increment</button>
                    <button className="decrement" onClick={handleDecrement}>Decrement</button>
                </div>
                </div>
    )
}

export default Counter
