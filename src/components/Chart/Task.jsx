import { useContext, useState } from "react";
import EditTaskButton from "../ToolBar/task/EditTaskButton";
import { TasksContext } from "../_context/_taskContext";
import DeleteTaskButton from "../ToolBar/task/DeleteTaskButton";

function Task() {
  let taskList = useContext(TasksContext);

  let result = [];

  for (let day in taskList) {
    if (taskList[day].length < 1) {
      result.push(
        <div className="h-full text-center" key={day}>
          <p>No Tasks for today!</p>
        </div>
      );
    } else {
      let dayTask = taskList[day].map((task) => {
        return (
          <li key={task["id"]}>
            <div className="group relative hover:bg-gray-300">
              <p className="py-3">{task["body"]}</p>

              <div
                className="hidden group-hover:flex flex-col justify-center
                absolute right-0 top-0 bottom-0
                w-min h-full
                "
              >
                <EditTaskButton taskKey={task.id} />
                <DeleteTaskButton taskKey={task.id} />
              </div>
            </div>
          </li>
        );
      });

      result.push(
        <div className="overflow-y-auto h-full" key={day}>
          <ul className="">{dayTask}</ul>
        </div>
      );
    }
  }

  return <>{result}</>;
}

export default Task;
