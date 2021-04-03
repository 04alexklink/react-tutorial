
const Greet = (props) => {
  const {firstName, secondName, children} = props;
    return (
    <div>
      <h1>Hello {firstName} {secondName}!</h1>
      {children}
    </div>
    )
}

export default Greet
