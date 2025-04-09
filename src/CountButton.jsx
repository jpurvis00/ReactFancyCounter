import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  //We are adding event to the arrow function so that we can "unfocus" from
  //that button. Without this, when you click on a button with the mouse, that
  //button get's focused and stays focused. So if you hit the space key, it runs
  //the code for the space key and the button click bc of the focus. We need to
  //unfocus the button so the space key code is all that runs. If not, the count
  //does odd things like increases by 2.
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "plus") {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      } else {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
