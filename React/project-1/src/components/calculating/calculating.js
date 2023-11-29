import React, { useState } from "react";
import "./calculating.css"

const Calculating = () =>{
  const [value, setValue] = useState(0);
  const [input, setInput] = useState('');

  const inp = (a) => {
    setInput(a.target.value);
  };

  const calc = () => {
      setValue(eval(input));
  };
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };
  const clearInput = () =>{
    setInput('');
    setValue(0);
  }  
    return(
        <div>
            <div className="block">
                <h1>Простой калькулятор</h1>
                <input className="inp" type="text" value={input} onChange={inp} />
                <div className="box">
                    <button onClick={() => handleButtonClick('+')} className="btn b">+</button>
                    <button onClick={() => handleButtonClick('-')} className="btn b">-</button>
                    <button onClick={() => handleButtonClick('*')} className="btn b">*</button>
                    <button onClick={() => handleButtonClick('/')} className="btn b">/</button>
                    <button onClick={calc} className="btn b">=</button>
                    <button onClick={clearInput} className="btn">Clear</button>
                </div>
                <p>Результат:{value}</p>
            </div>
        </div>
    )
}

export default Calculating