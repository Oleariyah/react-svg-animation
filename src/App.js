import React, { useState, Fragment } from "react";
import anime from "animejs";
import "./App.css";

export default () => {
  const [clicked, setClick] = useState(false);
  const handleClicked = () => {
    anime({
      targets: ".polymorph",
      points: [
        {
          value: "215,110 0,110 0,0 42,0 60,72"
        },
        {
          value: "215,110 0,110 0,0 0,0 60,72"
        }
      ],
      easing: "easeOutQuad",
      duration: 2000,
      loop: false
    });

    anime({
      targets: ".blip",
      opacity: 1,
      duration: 500,
      translateY: 150
    });
    setClick(true);
  };

  const handleBackButton = () => {
    anime({
      targets: ".polymorph",
      points: [
        {
          value: "215,110 0,110 0,0 42,0 60,72"
        },
        {
          value: "215,110 0,110 0,0 42,0 215,0"
        }
      ],
      easing: "easeOutQuad",
      duration: 2000,
      loop: false
    });
    anime({
      targets: ".blip",
      opacity: 0,
      duration: 500,
      translateY: -800
    });
    setClick(false);
  };

  return (
    <Fragment>
      {!clicked ? (
        <button className="button col-md" onClick={handleClicked}>
          Click me!
        </button>
      ) : null}
      <svg viewBox="0 0 215 110">
        <polygon className="polymorph" points="215,110 0,110 0,0 42,0 215,0 " />{" "}
      </svg>
      <div className="blip">
        <h1>Well, that was revealing...</h1>
        <p>Isn't this cool? Here is more text to fill the space a bit more.</p>
        <button className="button blip-btn" onClick={handleBackButton}>
          Click me!
        </button>
      </div>
    </Fragment>
  );
};
