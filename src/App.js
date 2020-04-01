import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [imgSrc, setImgSrc] = useState("");

  // Set our environment to an easier to use name
  const environment = process.env.NODE_ENV;

  // Set our secret to the environment variable
  const secret = process.env.REACT_APP_SECRET;

  // We should be using this in a production environment
  const getDoggos = () => {
    console.log("Getting a doggo");
    console.log(`Shhhhh, our secret is:\n ${secret}`);
    setImgSrc("https://placedog.net/600/400");
  };

  // We should use this in a development environment
  const getKitties = () => {
    console.log("Getting a kitten");
    console.log(`Shhhhh, our secret is:\n ${secret}`);
    setImgSrc("https://placekitten.com/600/400");
  };
  return (
    <div className="App">
      {/* We can use the environment to change the behaviour of the app */}
      {environment === "production" ? (
        <div>
          <p>Doggo Viewer</p>
          <button onClick={getDoggos}>Click to see a doggo</button>
        </div>
      ) : (
        <div>
          <p>Kitty Viewer</p>
          <button onClick={getKitties}>Click to see a kitty</button>
        </div>
      )}
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default App;
