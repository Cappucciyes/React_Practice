import { useState } from "react";
import createTask from "./createTask";

//Main ToolBar Component
function ToolBar() {
  return (
    <div className="h-[15%] w-[95%] overflow-hidden flex flex-row justify-start items-center">
      <createTask />
    </div>
  );
}

export default ToolBar;
