import { useState } from 'react';


function Counter(){
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    return(
        <div className="flex">
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={() => {if (count > 0){
                setCount(count -1)
            }}}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
            {show && <h5>about me</h5> }
            <button onClick={()=> setShow(!show)}>{ show ? "Hide" : "Show" }</button>
        </div>
    )
}

export default Counter;