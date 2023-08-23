import { useContext } from "react";
import { TASKSTATUS } from "../App.jsx";

//

function Task() {
  let taskStatus = useContext(TASKSTATUS);
  let result = [];

  for (let day in taskStatus["taskList"]) {
    if (taskStatus["taskList"][day].length < 1) {
      result.push(
        <div className="h-full text-center" key={day}>
          <p>No Tasks for today!</p>
        </div>
      );
    } else {
      let dayTask = [];

      for (let taskInList in taskStatus["taskList"][day]) {
        console.log(
          taskStatus["taskList"][day][taskInList]["id"],
          taskStatus["taskList"][day][taskInList]["task"]
        );

        dayTask.push(
          <li key={taskStatus["taskList"][day][taskInList]["id"]}>
            {taskStatus["taskList"][day][taskInList]["task"]}
          </li>
        );
      }

      result.push(
        <div className="overflow-y-auto h-full" key={day}>
          <ul className="list-disc list-inside">{dayTask}</ul>
        </div>
      );
    }
  }
  return <>{result}</>;
}

export default Task;
