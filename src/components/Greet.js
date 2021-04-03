
const Greet = (props) => {
    return (
    <div>
      <h1>Hello {props.firstName} {props.secondName}!</h1>
      <p>{props.children}</p>
    </div>
    )
}

export default Greet
