import { useContext, useState } from "react";
import { PLANSACTION, PlansDispatchContext } from "../../_context/_planContext";
import { createPortal } from "react-dom";

function DeletePlanForm({ planInfo, isOpen, setIsOpen }) {
  let [isConfirmed, setConfirm] = useState(false);
  let PlanDispatch = useContext(PlansDispatchContext);

  function closeForm() {
    setIsOpen(!isOpen);
  }

  function deletePlan() {
    PlanDispatch({
      type: PLANSACTION.DELETE,
      targetPlan: planInfo,
    });

    setConfirm(true);
  }

  let AskconfirmPage = (
    <div className="bg-white p-10">
      <p className="inline">Do you really want to delete this plan?</p>
      <div className="py-2 flex flex-col bg-gray-200 m-2">
        <p>plan: {`${planInfo.name}`}</p>
        {planInfo.whenObjects.map((planTime, index) => {
          let startHour = parseInt(planTime.start / 4);
          let startMinute = (parseInt(planTime.start % 4) - 1) * 15;

          let endHour = parseInt(planTime.end / 4);
          let endMinute = (parseInt(planTime.end % 4) - 1) * 15;

          let timeFormatted = [startHour, startMinute, endHour, endMinute].map(
            (num) => {
              return num.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              });
            }
          );

          return (
            <p
              className="inline"
              key={`${planInfo.name}-${index}`}
            >{`${timeFormatted[0]}:${timeFormatted[1]} ~ ${timeFormatted[2]}:${timeFormatted[3]} on day ${planTime.day}`}</p>
          );
        })}
      </div>
      <button className="bg-red-600 m-2" onClick={deletePlan}>
        Delete
      </button>
      <button className="bg-green-300 m-2" onClick={closeForm}>
        Cancel
      </button>
    </div>
  );

  let completedPage = (
    <div className="bg-white p-10">
      <p>Deletion Completed</p>
      <button>Ok</button>
    </div>
  );

  let body = isConfirmed ? completedPage : AskconfirmPage;

  return createPortal(
    <>
      <div
        className="flex items-center justify-center
      absolute top-0 left-0 right-0 bottom-0
    bg-opacity-75 bg-black"
      >
        {body}
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default DeletePlanForm;
