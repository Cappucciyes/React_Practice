

//function for searching task
function findTask(taskList, key) {
    for (let date in taskList) {
        for (let task in taskList[date]) {
            if (key === taskList[date][task].id) {
                return {
                    task: taskList[date][task],
                    date: date
                }
            }   
        }
    }
}

//function for counting tasks
function countTask(list) {
    let totalCount = 0;
  
    for (let day in list) {
      totalCount += list[day].length;
    }
  
    return totalCount;
  }

export {findTask, countTask}