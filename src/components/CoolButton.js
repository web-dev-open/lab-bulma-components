function CoolButton({ children, isSuccess }) {
  // if (isSuccess === undefined) {
  //   isSuccess = false;
  // }
  return (
    <button className={`button ${isSuccess ? "isSuccess" : ""}`}>
      {children}
    </button>
  );
}

export default CoolButton;
