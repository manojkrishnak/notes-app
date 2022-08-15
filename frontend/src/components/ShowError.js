const ShowError = ({ message, variant }) => {
  const styles = {
    backgroundColor: variant,
    color: "white",
    padding: "0.5rem",
    // display: "inline",
    width: "400px",
  };
  return (
    <div style={styles}>
      <p>{message}</p>
    </div>
  );
};

export default ShowError;
