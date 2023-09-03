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
  EDIT: "edit",
  DELETE: "delete",
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
    case "edit": {
      let [oldDate, newDate, updatedTask] = [
        action.updateInfo.oldDate,
        action.updateInfo.newDate,
        action.updateInfo.updatedTask,
      ];

      let updatedTaskList = {
        ...tasks,
        [oldDate]: [...tasks[oldDate]],
        [newDate]: [...tasks[newDate]],
      };

      if (oldDate != newDate) {
        updatedTaskList[oldDate] = updatedTaskList[oldDate].filter(
          (task) => task.id != updatedTask.id
        );

        updatedTaskList[newDate].push(updatedTask);
      } else {
        updatedTaskList[newDate][
          updatedTaskList[newDate].findIndex(
            (task) => task.id == updatedTask.id
          )
        ] = updatedTask;
      }

      return updatedTaskList;
    }
    case "delete": {
      let [date, id] = [action.targetTask.date, action.targetTask.task.id];
      let updatedTask = {
        ...tasks,
        [date]: [...tasks[date]],
      };

      console.log(updatedTask[date]);

      updatedTask[date] = updatedTask[date].filter((task) => task.id != id);

      return updatedTask;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export { TasksContext, TasksDispatchContext, TASKSACTION, TaskContextBundle };
