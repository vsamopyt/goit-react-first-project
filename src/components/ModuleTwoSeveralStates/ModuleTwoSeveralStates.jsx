import { useState } from "react";

export default function ModuleTwoSeveralStates () {
    let [clicks, setClicks] =useState(0);
    let [isOpen, setToggle] = useState(false);

    // const handleClick =()=>{
      
    //     setClicks(clicks+1);
    // }
    const handleToggle =()=>{
        setToggle(!isOpen);
   
    }


    return (
        <>
        <ul>
            <li><button onClick={()=>{setClicks(clicks+=1)}}>current: {clicks}</button></li>
 
            <li><button onClick={handleToggle}>{isOpen?"true":"false"}</button></li> 
        </ul>
        {clicks!=0 && <p>Count of clicks{clicks}</p>}
        {isOpen&&<p>You can me see</p>}
    
       </>


    )}