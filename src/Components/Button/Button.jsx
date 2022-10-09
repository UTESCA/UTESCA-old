import "./Button.css";
function Button({ name, size }) {
  const boldness = `text-${size}xl`;
  console.log(boldness);
  return <div className={"fancy-button up " + boldness}>{name}</div>;
}

export default Button;
