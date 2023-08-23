import taskList from "../data/task.json";
function Task() {
  let result = [];

  for (let day in taskList) {
    if (taskList[day].length < 1) {
      result.push(
        <div className="h-full text-center">
          <p>No Tasks for today!</p>
        </div>
      );
    } else {
      let dayTask = [];

      for (let taskInList in taskList[day]) {
        dayTask.push(
          <li key={taskList[day][taskInList]["id"]}>
            {taskList[day][taskInList]["task"]}
          </li>
        );
      }

      result.push(
        <div className="overflow-y-auto h-full">
          <ul className="list-disc list-inside">{dayTask}</ul>
        </div>
      );
    }
  }
  return <>{result}</>;
}

export default Task;
