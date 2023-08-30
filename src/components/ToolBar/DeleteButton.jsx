import { useContext } from "react";

function DeleteButton({ taskKey }) {
  return (
    <>
      <button className="bg-red-600" onClick={() => console.log(taskKey)}>
        Delete
      </button>
    </>
  );
}

export default DeleteButton;
