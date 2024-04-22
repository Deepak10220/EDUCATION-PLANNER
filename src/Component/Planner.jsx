import React from 'react';
import { useState } from 'react';
import Cardplaner from './Cardplaner';
import './Planner.css';

function Planner(){

const [courseData,setCourseData]=useState([]);

const onclickHandler=()=>{
    const courseName=document.getElementById("courseName").value;
    const courseHours=document.getElementById("courseHur").value;

    

    const newCourseData={
        name:courseName,
        hour:courseHours
    }
    // push the object created in above
    const data=JSON.parse(JSON.stringify(courseData));
    data.push(newCourseData);
    setCourseData(data);
}

const deleteCard=(index)=>{
    const updatedData=[...courseData];
    updatedData.splice(index,1);
    setCourseData(updatedData);
}
  return (
    <div className='Container'>
       <h1>YOUR EDUCATION PLANNER</h1> 
       <div className='input-container'>

       <input type="text" id="courseName" placeholder='Subject' />
       <input type="number" name="" id="courseHur" placeholder='Hours' />
       <button onClick={onclickHandler}>Add</button>
       </div>
       {courseData.map((elem,index)=>{
           return(<Cardplaner name={elem.name} hour={elem.hour} key={index} onDelete={()=>deleteCard(index)}/>)
       })}
    </div>
    
  )
}

export default Planner