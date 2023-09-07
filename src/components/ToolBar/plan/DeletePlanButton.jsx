import { useContext, useState } from "react";
import { findPlan } from "./utilsForPlan";
import { PlansContext } from "../../_context/_planContext";
import DeletePlanForm from "../../Forms/plan/DeleletPlanForm";

function DeletePlanButton({ planName }) {
  let planContext = useContext(PlansContext);
  let targetPlan = findPlan(planContext, planName);
  let [isFormOpen, setIsFormOpen] = useState(false);

  let deleteForm = isFormOpen ? (
    <DeletePlanForm
      planInfo={targetPlan}
      isOpen={isFormOpen}
      setIsOpen={setIsFormOpen}
    />
  ) : null;

  return (
    <>
      {deleteForm}
      <button
        className="bg-red-700"
        type="button"
        onClick={() => setIsFormOpen(true)}
      >
        Delete
      </button>
    </>
  );
}

export default DeletePlanButton;
