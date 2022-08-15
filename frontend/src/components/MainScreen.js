import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
  return (
    <>
      <div className="container page">
        {title && (
          <>
            <h2 className="page-title">{title}</h2>
            <hr />
          </>
        )}
        {children}
      </div>
    </>
  );
};

export default MainScreen;
