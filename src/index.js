import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating defaultRating={3} onSetRating={setMovieRating} />
      <p>This movie's rating is : {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating maxRating={5} defaultRating={3} />
    <StarRating
      size={24}
      color={"blue"}
      messages={["Terrible", "bad", "Okay", "good", "amazing"]}
    />
    <Test />
  </React.StrictMode>
);
