import CreateTask from "./CreateTask";

//Main ToolBar Component
function ToolBar() {
  return (
    <div className="h-[15%] w-[95%] overflow-hidden flex flex-row justify-start items-center">
      <CreateTask />
    </div>
  );
}

export default ToolBar;
