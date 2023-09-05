import TimeChart from "./TimeChart";
import { useContext } from "react";
import { PlansContext } from "../_context/_planContext";

function Plan() {
  let planList = [];
  let planContext = useContext(PlansContext);

  for (let i in planContext) {
    for (let repetition in planContext[i].when) {
      planList.push({
        color: planContext[i].color,
        when: planContext[i].when[repetition],
        name: planContext[i].name,
      });
    }
  }

  console.log(planList);

  return (
    <>
      <div
        className="absolute top-0 left-0 right-0 h-full
      grid grid-cols-5 grid-rows-[repeat(96,_minmax(0,_1fr))]
      "
      >
        {planList.map((planData, index) => {
          return (
            <div
              className={`${planData.color} ${planData.when}`}
              key={`plan:${planData.name}-${index}`}
            >
              {planData.name}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Plan;
