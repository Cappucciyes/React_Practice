import Chart from "./components/Chart";
import taskObject from "./data/task.json";

import { useState, createContext } from "react";

const TASKSTATUS = createContext({
  taskList: {},
  taskCount: 0,
}); // initialize context

//Main App function
function App() {
  const [TASKLIST, setTaskList] = useState(taskObject);
  const [TASKCOUNT, setTaskCount] = useState(countTask(TASKLIST));

  return (
    <>
      <TASKSTATUS.Provider
        value={{
          taskList: TASKLIST,
          taskCount: countTask(TASKLIST),
        }}
      >
        <div className="h-screen w-full flex flex-row justify-center">
          <Chart />
        </div>
      </TASKSTATUS.Provider>
    </>
  );
}

function countTask(taskList) {
  let totalCount = 0;

  for (let day in taskList) {
    totalCount += taskList[day].length;
  }

  return totalCount;
}

export default App;
export { TASKSTATUS };
