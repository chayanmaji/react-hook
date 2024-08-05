import React, { useState, useEffect, useRef } from "react";

const RefHook = () => {
    const [name, setName] = useState('');
    const renderCount = useRef(1);
    const inputRef = useRef();
    const inputResetButton = useRef();

    useEffect(()=>{
        renderCount.current = renderCount.current + 1;
    });

    useEffect(()=>{
        inputResetButton.current.focus();
    },[]);

    return (
        <>
            <h3>useRef hook</h3>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is {name}</div>
            <div>Component render {renderCount.current} times</div>
            <button ref={inputResetButton} type="button" onClick={()=>{
                setName('');
                renderCount.current = 1;
                inputRef.current.focus();
            }} >Reset</button>
        </>
    )
}

export default RefHook;