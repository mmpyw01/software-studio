import React,{useState} from 'react'
import './Button.css';

function Button() {
    const [value,setValue] = useState("MIN")

    const handleClick = ( val ) =>{
        const shallowValue = value
        if(val == -1){
            if(shallowValue == "MIN"){
                alert("Cannot unvote")
            }
            else if(shallowValue =="MAX"){
                setValue(9)
            }
            else if(shallowValue == 1){
                setValue("MIN")
            }
            else {
                setValue(shallowValue+val)
            }
        }else {
            if(shallowValue == "MAX"){
                alert("Cannot vote more")
            }
            else if(shallowValue == "MIN"){
                setValue(1)
            }
            else if(shallowValue == 9){
                setValue("MAX")
            }
            else {
                setValue(shallowValue+val)
            }
        }
    }

    return (
        <div className='Button'>
            <button className="operate-button" onClick={() => handleClick(1)}>Click to Vote</button>
            <div className='value'>{value}</div>
            <button className="operate-button" onClick={() => handleClick(-1)}>Click to Unvote</button>
        </div>
    )
}

export default Button