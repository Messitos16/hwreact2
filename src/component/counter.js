
import '../App.css';
import { useState } from 'react'
function Counter() {
    const [state, setState] = useState(0)
    function add() {
        if (state <20){
            setState(state + 1)
        }
        
    }
    function remove() {
        if (state >0){
            setState(state - 1)
        }
        
    }
    function add10() {
        if (state < 10){
            setState(state + 10)
        }
    }
    
    function remove10() {
        if (state >= 10){
            setState(state - 10)
        }
    }
        function add2() {
            if (state >= 2){
                setState(state * 2)
            }
        }
 

    return (
        <div className="Counter">
            <h1>{state}</h1>
            <button onClick={(add)}>incriment</button>
            <button onClick={(remove)}>decriment</button>
            <button onClick={(add10)}>+10</button>
            <button onClick={(remove10)}>-10</button>
            <button onClick={(add2)}>*2</button>
        </div>
    );
}

export default Counter;
