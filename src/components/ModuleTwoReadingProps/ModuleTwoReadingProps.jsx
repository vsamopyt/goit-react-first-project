export default function ModuleTwoReadingProps ({message,children}) {
const handleClick =() => {
alert(message)
}
    return (
        <>
        <button onClick ={handleClick}>{children}</button> 
        <button onClick ={()=>alert(message)}>{children}</button> 
        </>
    )
}