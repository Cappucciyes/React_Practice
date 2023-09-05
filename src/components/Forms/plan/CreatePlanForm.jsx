import { useContext, useState, useEffect } from "react";
import {
  PLANSACTION,
  PlansContext,
  PlansDispatchContext,
  PlansColorContext,
} from "../../_context/_planContext";
import { createPortal } from "react-dom";

function CreatePlanForm({ isFormOpen, setIsFormOpen }) {
  let [timeInputKey, setTimeInputKey] = useState([0]);
  let [keyTracker, setKeyTracker] = useState(0);
  let planContext = useContext(PlansContext);
  let planDispatchContext = useContext(PlansDispatchContext);
  let planColorContext = useContext(PlansColorContext);

  let colorChoice = [];

  for (let colorValue in planColorContext) colorChoice.push(colorValue);

  useEffect(() => {
    setKeyTracker(++keyTracker);
  }, [timeInputKey]);

  function handleSubmit(submitEvent) {
    // Prevent the browser from reloading the page
    submitEvent.preventDefault();
    let formData = new FormData(submitEvent.target); // Read the form data

    let formObject = Object.fromEntries(formData.entries()); //Change read data to a plain object:

    let whenData = [];

    for (let i in timeInputKey) {
      whenData.push({
        day: formObject[`planDate${timeInputKey[i]}`],
        start:
          parseInt(
            (parseInt(formObject[`timeStartHour${timeInputKey[i]}`], 10) * 60 +
              parseInt(formObject[`timeStartMinute${timeInputKey[i]}`], 10)) /
              15,
            10
          ) + 1,
        end:
          parseInt(
            (parseInt(formObject[`timeEndHour${timeInputKey[i]}`], 10) * 60 +
              parseInt(formObject[`timeEndMinute${timeInputKey[i]}`], 10)) /
              15,
            10
          ) + 1,
      });
    }

    for (let i in whenData) {
      //check if plan ends before it starts
      if (whenData[i].start >= whenData[i].end) {
        alert(
          `On day ${whenData[i].day},  end of plan is either earlier or same as start of plan`
        );
        return;
      }
      //check if they over lap each other

      for (let j in whenData) {
        if (i == j) continue;

        if (whenData[i].day == whenData[j].day) {
          let overlap =
            whenData[i].start < whenData[j].end ||
            whenData[j].start < whenData[i].end;

          if (overlap) {
            alert(`On day ${whenData[i].day}, plan overlap with itself`);
            return;
          }
        }
      }
      //check if plan overlaps with plans that are already there
      for (let j in planContext) {
        for (let k in planContext[j].whenObject) {
          if (whenData[i].day == planContext[j].whenObject[k].day) {
            let [newPlanTime, oldPlanTime] = [
              whenData[i],
              planContext[j].whenObject[k],
            ];
            let overlap =
              (newPlanTime.start < oldPlanTime.start &&
                oldPlanTime.start < newPlanTime.end) ||
              (newPlanTime.start < oldPlanTime.end &&
                oldPlanTime.end < newPlanTime.end) ||
              (oldPlanTime.start < newPlanTime.start &&
                newPlanTime.end < oldPlanTime.end) ||
              (oldPlanTime.start == newPlanTime.start &&
                oldPlanTime.end == newPlanTime.end);

            if (overlap) {
              alert(
                `On day ${whenData[i].day}, plan overlap with plan: ${planContext[j].name}`
              );
              return;
            }
          }
        }
      }
    }

    let when = whenData.map((whenInfo) => {
      console.log(
        `col-start-[${whenInfo.day}] row-start-[${whenInfo.start}] row-end-[${whenInfo.end}]`
      );
      return `col-start-[${whenInfo.day}] row-start-[${whenInfo.start}] row-end-[${whenInfo.end}]`;
    });

    planDispatchContext({
      type: PLANSACTION.CREATE,
      newPlan: {
        name: formObject.name,
        when: when,
        whenObject: whenData,
        color: planColorContext[formObject.color],
      },
    });

    setIsFormOpen(!isFormOpen);
  }

  return createPortal(
    <>
      <div
        className="flex items-center justify-center
        absolute top-0 left-0 right-0 bottom-0
      bg-opacity-75 bg-black"
      >
        <form onSubmit={handleSubmit} className="bg-white p-10 w-[20%]">
          <div className="flex flex-col p-2" id="timeField">
            {timeInputKey.map((key) => (
              <PlanTimeField
                id={key}
                inputKey={timeInputKey}
                setInputKey={setTimeInputKey}
              />
            ))}

            <button
              type="button"
              onClick={() => {
                setTimeInputKey([...timeInputKey, keyTracker + 1]);
              }}
              className="border-2 border-gray-300"
            >
              +
            </button>
          </div>

          <div className="flex flex-col p-2">
            <p>Write the task out: </p>
            <input type="text" name="name" id="name" />
          </div>

          <div className="flex flex-row">
            <p className="inline-block">Select Color:</p>
            <select name="color" id="color">
              {colorChoice.map((element) => {
                return <option value={`${element}`}>{element}</option>;
              })}
            </select>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 
            hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm 
            w-full px-5 py-2.5 text-center"
          >
            Submit
          </button>

          <button
            type="button"
            className="text-white bg-red-400 
            hover:bg-red-600 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm 
            w-full px-5 py-2.5 text-center mt-2"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            Cancel
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

function PlanTimeField({ id, inputKey, setInputKey }) {
  return (
    <>
      <div
        className="flex flex-row items-center"
        id={`planTimeInput${id}`}
        key={`planTimeInput${id}`}
      >
        <div id="timeField">
          <div id="planDate">
            <p className="inline-block">Date: </p>
            <select
              name={`planDate${id}`}
              id={`planDate${id}`}
              key={`planDate${id}`}
              required
              className="w-min"
            >
              <option value="1">Day 1</option>
              <option value="2">Day 2</option>
              <option value="3">Day 3</option>
              <option value="4">Day 4</option>
              <option value="5">Day 5</option>
            </select>
          </div>
          <div id="timeStart">
            <p className="inline-block">Time Start: </p>
            <select
              name={`timeStartHour${id}`}
              id={`timeStartHour${id}`}
              key={`timeStartHour${id}`}
              required
            >
              {Array.from(Array(24)).map((c, index) => {
                return <option value={`${index}`}>{index}</option>;
              })}
            </select>{" "}
            :
            <select
              name={`timeStartMinute${id}`}
              id={`timeStartMinute${id}`}
              key={`timeStartMinute${id}`}
              required
            >
              <option value="0">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
          </div>
          <div id="timeEnd">
            <p className="inline-block">Time End: </p>
            <select
              name={`timeEndHour${id}`}
              id={`timeEndHour$${id}`}
              key={`timeEndHour$${id}`}
            >
              {Array.from(Array(24)).map((c, index) => {
                return <option value={`${index}`}>{index}</option>;
              })}
            </select>{" "}
            :
            <select
              name={`timeEndMinute${id}`}
              id={`timeEndMinute${id}`}
              key={`timeEndMinute${id}`}
              required
            >
              <option value="0">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="bg-red-400 hover:bg-red-300 active:bg-red-500
          text-white font-bold text-lg
        w-min h-[20%] px-1"
          id={`deleteTimeField${id}`}
          key={`deleteTimeField${id}`}
          onClick={() => {
            deleteTimeField(id);
          }}
        >
          -
        </button>
      </div>
    </>
  );

  function deleteTimeField(toDelete) {
    if (inputKey.length < 2) {
      alert("Needs at least one time input!");
      return;
    }
    let newList = inputKey.filter((key) => toDelete != key);
    setInputKey(newList);
  }
}

export default CreatePlanForm;
