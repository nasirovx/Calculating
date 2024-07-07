import React, { useState } from "react";
import "./calculating1.css";

const Calculating1 = () =>{
    const [value, setValue] = useState('');
    const [input, setInput] = useState('');
    const inp = (a) => {
        setInput(a.target.value); 
      };
      const calc = () => {
        setValue(eval(input));
    };
    const clearInput = () =>{
        setInput('');
        setValue('');
      }  
      const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
      };
      const minus = () =>{
        setInput('-' + input)
      }
    return(
        <div>
        <div className="block">
            <h2 className="h2">{value}</h2>
            <input type="text" value={input} onChange={inp} placeholder="0"/>
            <div className="box">
                <button className="btn s" onClick={clearInput}>AC</button>
                <button className="btn s" onClick={minus}>+/-</button>
                <button className="btn s" onClick={() => handleButtonClick('%')}>%</button>
                <button className="btn a" onClick={() => handleButtonClick('/')}>÷</button>
                <button className="btn" onClick={() => handleButtonClick('7')}>7</button>
                <button className="btn" onClick={() => handleButtonClick('8')}>8</button>
                <button className="btn" onClick={() => handleButtonClick('9')}>9</button>
                <button className="btn a" onClick={() => handleButtonClick('*')}>×</button>
                <button className="btn" onClick={() => handleButtonClick('4')}>4</button>
                <button className="btn" onClick={() => handleButtonClick('5')}>5</button>
                <button className="btn" onClick={() => handleButtonClick('6')}>6</button>
                <button className="btn a" onClick={() => handleButtonClick('-')}>-</button>
                <button className="btn" onClick={() => handleButtonClick('1')}>1</button>
                <button className="btn" onClick={() => handleButtonClick('2')}>2</button>
                <button className="btn" onClick={() => handleButtonClick('3')}>3</button>
                <button className="btn a" onClick={() => handleButtonClick('+')}>+</button>
                <button className="btn o" onClick={() => handleButtonClick('0')}>0</button>
                <button className="btn" onClick={() => handleButtonClick('.')}>.</button>
                <button className="btn a"  onClick={calc}>=</button>
            </div>
        </div>
    </div>
    )
}
export default Calculating1
