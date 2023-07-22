import "./ButtonComponent.css";

function ButtonComponent(props) {
  const { children, colorFondo } = props;

  const styleButton = {
    backgroundColor: colorFondo,
  };

  return (
    <>
      <button style={styleButton} className="btn">
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;
