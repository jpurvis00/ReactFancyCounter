import { MinusIcon } from "@radix-ui/react-icons";

export default function DecreaseButton({ setCount }) {
  const handleClick = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <button className="count-btn" onClick={handleClick}>
      <MinusIcon className="count-btn-icon" />
    </button>
  );
}
