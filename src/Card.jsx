import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import { useState, useEffect } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  //We are using useEffect here bc we are interacting with something outside of react.
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space" && !locked) {
        setCount(count + 1);
      }
    };

    //Adding an event listener for a keydown event. This then calls the
    //handleKeydown function and checks to see if the key pressed was the space bar.
    //If so, it adds one to the count.
    window.addEventListener("keydown", handleKeydown);

    //We then need to clean up the event listener. If we don't clean it up,
    //it stays open and then each key press another one is opened. Leaving
    //multiple open eventually crashes our app.
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count, locked]);

  return (
    //This is a ternary operator to control the class that is applied to this div.
    //The card class will always be applied but then we check the locked var.
    //If true, we apply the card--limit class to change the card bg color. If false,
    //we do nothing.
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      {/*We replaced the this call  with the new ButtonContainer code below.
         This allows us to pass the CountButton components as children to the
         components down the tree. This frees us from prop drilling and makes
         it easier to restructure our app tree when needed.*/}
      {/*<ButtonContainer setCount={setCount} locked={locked} />*/}
      <ButtonContainer>
        <CountButton type="plus" setCount={setCount} locked={locked} />
        <CountButton type="minus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
