import React from 'react';
import CounterContext from './CounterContext';
const Child = (props) => {
    let counterValue = useContext(CounterContext)
    return (
        <div>
            <h2>This is first child1</h2>
    <h2>My name is {props.name}</h2>
        </div>
    )
}
 

export default Child;