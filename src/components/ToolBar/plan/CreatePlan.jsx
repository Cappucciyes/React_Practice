import CreatePlanForm from "../../Forms/plan/CreatePlanForm";
import { useState, useContext } from "react";

//New Task Button
function CreatePlan() {
  let [isFormOpen, setFormOpen] = useState(false);

  let createForm = isFormOpen ? (
    <CreatePlanForm isFormOpen={isFormOpen} setIsFormOpen={setFormOpen} />
  ) : null;

  return (
    <>
      {createForm}
      <button
        className="w-40 h-20 mx-2
      bg-green-400 hover:bg-green-300 active:bg-green-500
      border-solid border-2 rounded-xl border-white
      text-white font-bold"
        onClick={() => setFormOpen(!isFormOpen)}
      >
        <p>New Plan</p>
      </button>
    </>
  );
}

export default CreatePlan;
