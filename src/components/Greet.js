
const Greet = ({firstName, secondName, children}) => {
    return (
    <div>
      <h1>Hello {firstName} {secondName}!</h1>
      {children}
    </div>
    )
}

export default Greet
