//  import {userState} from "react"
 import { useState } from 'react';

// Variant ONE doesnt work
// export default function ModuleTwoReactivity () {
//     let click = 0;
//     const handleClick =()=>{
//         click=click+1;
//         console.log(click);
//     }

//     return (
//         <>
//         <button onClick ={handleClick}>current:{click}</button>
//         </>
//     )
// }

export default function ModuleTwoReactivity () {
    // let click = 0;
    // console.log(useState);
    console.log(useState(0));
    let [clicks, setClicks] = useState(0)
    const handleClick =()=>{
    //     // clicks=clicks+1;
        setClicks(clicks+1)
   
    console.log(clicks);
     }

    return (
        <>
        <button onClick ={handleClick}>current:{clicks}</button>
        </>
    )
}