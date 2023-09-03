import { useReducer, createContext } from "react";
import planList from "../../data/plan";

const PlansContext = createContext(null); // initialize context of planContext
const PlansDispatchContext = createContext(null); // initialize context of PlanDispatchContext

function PlanContextBundle({ children }) {
  const [plans, dispatch] = useReducer(plansReducer, planList);

  return (
    <PlansContext.Provider value={plans}>
      <PlansDispatchContext.Provider value={dispatch}>
        {children}
      </PlansDispatchContext.Provider>
    </PlansContext.Provider>
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
      return plans;
    }
    case "edit": {
      return plans;
    }
    case "delete": {
      return plans;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export { PlansContext, PlansDispatchContext, PLANSACTION, PlanContextBundle };
