import { useContext } from "react";
import { TasksContext } from "../_context/_context";

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
      let dayTask = [];

      for (let i in taskList[day]) {
        dayTask.push(
          <li key={taskList[day][i]["id"]}>{taskList[day][i]["body"]}</li>
        );
      }

      result.push(
        <div className="overflow-y-auto h-full" key={day}>
          <ul className="list-disc list-inside">{dayTask}</ul>
        </div>
      );
    }
  }

  console.log(result);

  return <>{result}</>;
}

export default Task;
