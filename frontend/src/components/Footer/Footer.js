const Footer = () => {
  const style = {
    position: "absolute",
    bottom: 0,
    width: "100%",
  };
  return (
    <>
      <footer className="footer flex justify-ct align-ct" style={style}>
        <p>Copyrights &copy; 2022 NotesMakerr</p>
      </footer>
    </>
  );
};

export default Footer;
