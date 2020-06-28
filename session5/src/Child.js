import React,{useContext} from 'react';
import CounterContext from './CounterContext';
const Child = (props) => {
    let counterValue = useContext(CounterContext)
    console.log(counterValue);
    return (
        <div>
            <h2>This is first child1</h2>
            <h2>Counter value is : {counterValue[0]}</h2>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increment +1</button>
        </div>
    )
}
 

export default Child;