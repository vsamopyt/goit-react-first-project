const Books = ({books})=> {
    return (
        <ul>
       { books.map((item) => {
            return <li key = {item.id}>{item.name}</li>
        })}
        </ul>
    )
}
export default Books;


