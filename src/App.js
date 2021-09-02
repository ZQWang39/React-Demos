import React from 'react';
import './App.css'
// import CommentList from './components/CommentList';
// import Compond from './components/Compond';
// import Hoc from './components/Hoc';
// import Condition from './components/Condition';
// import Demo from './components/Demo';
//import TodoList from './components/TodoList';
// import Counter from './components/Counter'

import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index'

function App() {
  // const [currentCount, setCount] = React.useState(0)
  const account = useSelector((state)=>state.account.balance);
  const dispatch = useDispatch();
  const ac = bindActionCreators(actionCreators, dispatch);

  console.log(ac)
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

  //console.log(depositMoney(10));
  // console.log(() => depositMoney(10))


  
    return (
      
      <div className="App">
        {/* <CommentList/>
        <Compond/>
        <Hoc />
        <Condition />
        <Demo/> */}
        {/* <span>Total count:</span>
        <Counter currentCount={currentCount} setCount={setCount}/> */}
        <h1>{account}</h1>
        <button onClick={() => depositMoney(10)}>Deposit</button>
        <button onClick={() => withdrawMoney(10)}>withdraw</button>
       
      </div>
    );
  }
  
  export default App;
  

