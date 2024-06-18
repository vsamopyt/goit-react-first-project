import { useState } from "react";
function ClickCounter ({value, funct}) {
    return (
        <button onClick={funct}>counter: {value}</button>
    )
}
export default function ModuleTwoElevationOfState () {
    const [clicks, setClicks] = useState(0);
    function handleClick () {
        setClicks(clicks+1)
    }
   
    return (
        <>

        <ClickCounter value={clicks} funct={handleClick}/>
        <ClickCounter value={clicks} funct={handleClick}/>
        </>
    )

}