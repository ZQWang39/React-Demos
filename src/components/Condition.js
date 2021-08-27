import React from 'react'

export const Condition = () => {

    const [login, setLogin] = React.useState(false)

    const handleClick = ()=>{
     setLogin(!login)
    }
    return (
        
        <div>
              {
            login ? (<h1> Welcome back, Ziqi! </h1>
                ):(<h1> Please log in to continue...</h1>)
        }
            <button onClick={handleClick}>
                {login ?'Logout':'Login'}
            </button>
          
        </div>
        
    )
}


export default Condition
