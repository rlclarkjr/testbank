import { useState } from "react";


const Home = () => {
  const [isAboutPopUp, setIsAboutPopUp] = useState(false);

  const toggleAboutPopUp = () => {
    setIsAboutPopUp(!isAboutPopUp);
  };

  const customStyles = {
    width: "25rem",
    padding: "10px",
    zIndex: "-1",
  };

  return (
    
    <>
      <div className="card-container">
        <div className="card" style={customStyles}>
          <h5 className="card-title">TMNT Bank</h5>
          <img src="images/cashbank.jpg" className="card-img-top" alt="logo" />
          <div className="card-body">
            <p className="card-text">
              Where the Ninja Turtles Bank
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="card-container">
        
      </div>

      
    </>
  );
};

export default Home;
