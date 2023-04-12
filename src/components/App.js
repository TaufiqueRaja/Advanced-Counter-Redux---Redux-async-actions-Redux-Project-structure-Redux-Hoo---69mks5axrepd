import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dec, inc, incByNum, signIn, signOut } from '../actions/action';

function App() {
  const {counter,islogged}=useSelector(state=>state);
  const [inputValue,setInputValue] = useState(2);
  const dispatch = useDispatch()
  console.log(counter);
  return (
    <div id='main'>
      {islogged && <div data-testid='counter'>{counter}</div>}
      {islogged? <button onClick={()=>{dispatch(signOut())}}>Logout</button>:<button onClick={()=>{dispatch(signIn())}}>Login</button>}
      <input type="number"  onChange={e=>{setInputValue(Number(e.target.value))}}/>
      <button onClick={()=>{dispatch(incByNum(inputValue))}}>Add amount</button>
      <button onClick={()=>{dispatch(inc())}}>+</button>
      <button onClick={()=>{dispatch(dec())}}>-</button>
    </div>
  );
}

export default App;
