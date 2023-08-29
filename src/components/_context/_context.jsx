import { useReducer, createContext } from "react";
import taskJSON from "../../data/task";

const TasksContext = createContext(null); // initialize context of TaskContext
const TasksDispatchContext = createContext(null); // initialize context of TaskDispatchContext

function TaskContextBundle({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, taskJSON);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

const TASKSACTION = {
  CREATE: "create",
  CHANGE: "change",
  DELETE: "delete",
  COUNT: "count",
  SEARCH: "search",
};

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "create": {
      let newTask = {
        ...tasks,
        [action.newTaskInfo.date]: [
          ...tasks[action.newTaskInfo.date],
          action.newTaskInfo.newtask,
        ],
      };

      return newTask;
    }
    case "change": {
      return tasks;
    }
    case "delete": {
      return tasks;
    }
    case "search": {
      return tasks;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export { TasksContext, TasksDispatchContext, TASKSACTION, TaskContextBundle };
