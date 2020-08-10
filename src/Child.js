import React,{useContext} from 'react'
import counterContext from './CounterContext'

const Child=()=> {
    let countState=useContext(counterContext);
    console.log(countState[0]);
    return (
        <div>
            <h2>This is first child using CounterContext</h2>
            <h2>{countState[0]}</h2>
            <button onClick={()=>countState[1](++countState[0])}>
                Increment Context
            </button>
        </div>
    )
}
export default Child