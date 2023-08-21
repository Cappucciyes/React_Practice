import Task from "./Task"

function Chart() {
    let tasks = {
        "1" : ['1', '2', '3', "4"],
        "2" : ['5', '6', '7', "8"],
        "3" : ['9', '10', '11', "12"],
        "4" : ['16', '15', '14', "13"],
        "5" : [],
    }

    let taskList = [];

    for (let val in tasks) {
        if(tasks[val].length === 0) {
            taskList.push(
                <ul>
                    <li key={'x'}>No tasks for today</li>
                </ul>
            )
           
        } else {
            taskList.push(<Task list={tasks[val]} />)
        }
    }

  return (
    <>
      <div className="flex-column h-3/5 w-11/12 ">
        {/* top part of chart */}
        <div className="grid grid-cols-6 w-full flex-1">
            <div className="text-center">days</div>
            <div className="text-center">1</div>
            <div className="text-center">2</div>
            <div className="text-center">3</div>
            <div className="text-center">4</div>
            <div className="text-center">5</div>
        </div>
        <div className="grid grid-cols-6 w-full flex-3 border-gray-500 bg-gray-200">
            <div className="text-center">Tasks</div>
            {taskList}
        </div>

        <div className="grid grid-cols-5 w-full flex-10">

        </div>
      </div>
    </>
  );
}

export default Chart;
