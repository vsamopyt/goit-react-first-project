import { useState } from "react";
export default function ModuleTwoConditionIsolation () {
    const [clicks, setClicks] =useState(0);
    const handleClick =()=> {
        setClicks(clicks+1)
    }
return (
    <button onClick={handleClick}>clicks: {clicks}</button>
)
}