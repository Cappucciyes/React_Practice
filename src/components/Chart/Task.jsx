import { useContext, useState } from "react";
import EditButton from "../ToolBar/EditButton";
import { TasksContext } from "../_context/_context";
import DeleteButton from "../ToolBar/DeleteButton";

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
            <div className="group relative">
              <p className="py-3">{task["body"]}</p>

              <div
                className="hidden group-hover:flex flex-col justify-center
                absolute right-0 top-0 bottom-0
                w-min h-full
                "
              >
                <EditButton taskKey={task.id} />
                <DeleteButton taskKey={task.id} />
              </div>
            </div>
          </li>
        );
      });
      // let dayTask = [];

      // for (let i in taskList[day]) {
      //   dayTask.push(
      // <li key={taskList[day][i]["id"]}>
      //   <div className="group relative">
      //     <p className="py-3">{taskList[day][i]["body"]}</p>

      //     <div
      //       className="hidden group-hover:flex flex-col justify-center
      //       absolute right-0 top-0 bottom-0
      //       w-min h-full
      //       "
      //     >
      //       {console.log(taskList[day][i]["id"])}
      //       <EditButton key={taskList[day][i]["id"]} />
      //       <button className="bg-red-600">Delete</button>
      //     </div>
      //   </div>
      // </li>
      //   );
      // }

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
