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

export {findTask}