import { PlusIcon } from "@radix-ui/react-icons";

export default function AddButton({ setCount }) {
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <button className="count-btn" onClick={handleClick}>
      <PlusIcon className="count-btn-icon" />
    </button>
  );
}
