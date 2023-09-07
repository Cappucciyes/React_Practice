import { useContext, useState } from "react";
import { PlansContext } from "../../_context/_planContext";
import { findPlan } from "./utilsForPlan";
import EditPlanForm from "../../Forms/plan/EditPlanForm";

function EditPlanButton({ planName }) {
  let planContext = useContext(PlansContext);
  let targetPlan = findPlan(planContext, planName);
  let [isFormOpen, setIsFormOpen] = useState(false);

  let body = isFormOpen ? (
    <EditPlanForm
      planInfo={targetPlan}
      isFormOpen={isFormOpen}
      setIsFormOpen={setIsFormOpen}
    />
  ) : null;

  return (
    <>
      {body}
      <button
        className="bg-green-200 max-h-full"
        type="button"
        onClick={() => setIsFormOpen(true)}
      >
        Edit{" "}
      </button>
    </>
  );
}

export default EditPlanButton;
