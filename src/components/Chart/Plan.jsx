import TimeChart from "./TimeChart";
import { useContext } from "react";
import { PlansContext } from "../_context/_planContext";
import { createPortal } from "react-dom";

function Plan({ timeChart }) {
  let planList = useContext(PlansContext);

  let timeblock = document.getElementById("day3time240");
  return createPortal(
    <>
      <div className="absolute top-0 left-0 right-0 h-[200%]"></div>
    </>,
    timeblock
  );
}

export default Plan;
