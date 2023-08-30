import { useContext } from "react";
import { TasksContext } from "../_context/_context";

function EditButton({ key }) {
  return (
    <>
      <button className="bg-blue-400" onClick={() => console.log(key)}>
        Edit
      </button>
    </>
  );
}

export default EditButton;
