import CreateTask from "./task/CreateTask";
import CreatePlan from "./plan/CreatePlan";

//Main ToolBar Component
function ToolBar() {
  return (
    <div className="h-[15%] w-[95%] overflow-hidden flex flex-row justify-start items-center">
      <CreateTask />
      <CreatePlan />
    </div>
  );
}

export default ToolBar;
