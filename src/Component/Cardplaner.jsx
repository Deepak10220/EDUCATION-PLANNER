import React, { useState } from 'react';
import './Card.css';


const Cardplaner = ({name,hour,key,onDelete}) => {

    const [hourValue,setHourValue]=useState(parseInt(hour,10));
  return (
    <div key={key} className='cardContainer'>
        <div className='insidecard'>

   <b>Course Name: {name}</b>
   <b>Course Hour: {hourValue}</b>
   <div>
    <button onClick={()=>{setHourValue(hourValue=>hourValue+1)}}>+</button>
    <button onClick={()=>{setHourValue(hourValue=>hourValue-1)}}>-</button>
    <button  style={{backgroundColor:"red"}} onClick={onDelete}>Delete</button>

   </div>
        </div>

    </div>
  )
}

export default Cardplaner