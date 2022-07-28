import React from 'react'
import { useParams } from 'react-router-dom';

const Number = (props) => {
    const { data } = useParams();

    const display = () =>{
        const displayData = isNaN(data) 
            ? <h1>Word is: { data }</h1>
            : <h1>Number is: { data }</h1> 
        return displayData;   
    }
  return (
    <div>
        {display()}
    </div>
  )
}

export default Number;