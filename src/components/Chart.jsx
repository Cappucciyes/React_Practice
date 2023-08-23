import Task from "./Task";

function Chart() {
  let timeChart = [];
  for (let i = 0; i < 25; i++) {
    let timeBlock = (
      <div
        className="h-20
        flex flex-row "
      >
        <div className="flex-1 border-2 border-black text-center">{i}:00</div>
        <div className="flex-1 bg-gray-400 border-t-2 border-b-2 border-gray-500">
          <div className="border-b-2 border-gray-500 h-1/4"></div>
          <div className="border-b-2 border-gray-500 h-1/4"></div>
          <div className="border-b-2 border-gray-500 h-1/4"></div>
        </div>
      </div>
    );

    timeChart.push(timeBlock);
  }
  return (
    <>
      <div className="flex-column h-5/6 w-11/12 ">
        {/* top part of chart */}
        <div
          className="grid grid-cols-6 w-full 
            h-[5%]
            border-2 border-solid border-black"
        >
          <div className="text-center">days</div>
          <div className="text-center">1</div>
          <div className="text-center">2</div>
          <div className="text-center">3</div>
          <div className="text-center">4</div>
          <div className="text-center">5</div>
        </div>

        {/* Task list of chart */}
        <div
          className="grid grid-cols-6 w-full 
            h-[20%] 
            border-2 border-solid border-gray-600 bg-gray-400"
        >
          <div className="text-center">Tasks</div>
          <Task />
        </div>

        {/* Time Table of chart */}
        <div
          className="border-2 border-black overflow-hidden flex flex-col
            h-[75%]"
        >
          <div className="overflow-scroll flex h-full">
            <div className="grid grid-cols-6 w-full">
              <div className="flex-col flex w-full">{timeChart}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
