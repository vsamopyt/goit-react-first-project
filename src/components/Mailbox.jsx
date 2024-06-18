const Mailbox = ({ user, messages }) => {
  return (
    <>
      <h2>{user}</h2>
      {messages.length > 0 ? (<p> Day was goot </p>) : (<h1> Day was not goot </h1>)}
    </>
  );
};
export default Mailbox;


// const Mailbox = ({ user, messages }) => {
//     return (
//       <>
//         <h2>{user}</h2>
//         {messages.length > 0 ? <p> Day was goot </p> : <p> Day was not goot </p>}
//       </>
//     );
//   };
//   export default Mailbox;