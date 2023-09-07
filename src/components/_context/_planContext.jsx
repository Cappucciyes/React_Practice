import { useReducer, createContext } from "react";
import planList from "../../data/plan";
import { COLOR } from "../_planColor";
import { CSStoCOLOR } from "../_planColor";

const PlansContext = createContext(null); // initialize context of planContext
const PlansDispatchContext = createContext(null); // initialize context of PlanDispatchContext
const PlansColorContext = createContext(null); // initialize context of PlanDispatchContext
const PlansColorCSSContext = createContext(null);

function PlanContextBundle({ children }) {
  const [plans, dispatch] = useReducer(plansReducer, planList);

  return (
    <PlansColorCSSContext.Provider value={CSStoCOLOR}>
      <PlansColorContext.Provider value={COLOR}>
        <PlansContext.Provider value={plans}>
          <PlansDispatchContext.Provider value={dispatch}>
            {children}
          </PlansDispatchContext.Provider>
        </PlansContext.Provider>
      </PlansColorContext.Provider>
    </PlansColorCSSContext.Provider>
  );
}

const PLANSACTION = {
  CREATE: "create",
  EDIT: "edit",
  DELETE: "delete",
};

function plansReducer(plans, action) {
  switch (action.type) {
    case "create": {
      let updatePlan = [...plans, action.newPlan];

      return updatePlan;
    }
    case "edit": {
      let updatePlan = plans.filter((plan) => plan.name != action.oldPlan.name);
      updatePlan.push(action.updatedPlan);

      return updatePlan;
    }
    case "delete": {
      let updatedPlan = plans.filter(
        (plan) => plan.name != action.targetPlan.name
      );
      return updatedPlan;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export {
  PlansContext,
  PlansDispatchContext,
  PLANSACTION,
  PlansColorContext,
  PlansColorCSSContext,
  PlanContextBundle,
};
