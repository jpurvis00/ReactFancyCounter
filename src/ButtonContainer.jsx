//Specifying children here and moving the buttons out of this component up
//into the Card component lets us get around prop drilling. This is when you
//pass props down through multiple components. This make it incredibly difficult
//to restructure your app.
export default function ButtonContainer({ children }) {
  return <div className="button-container">{children}</div>;
}
