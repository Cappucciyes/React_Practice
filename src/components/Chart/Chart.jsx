import Task from "./Task";
import ToolBar from "../ToolBar/ToolBar";
import TimeChart from "./TimeChart";
import Plan from "./Plan";

function Chart() {
  let labeledTimeChart = [];
  for (let i = 0; i < 24; i++) {
    let timeBlock = (
      <div
        className="h-20
        flex flex-row "
      >
        <div className="flex-1 border-2 border-black text-center">{i}:00</div>
        <div className="flex-1 bg-gray-400 border-gray-500">
          <div className="border border-gray-500 h-1/4"></div>
          <div className="border border-gray-500 h-1/4"></div>
          <div className="border border-gray-500 h-1/4"></div>
          <div className="border border-gray-500 h-1/4"></div>
        </div>
      </div>
    );

    labeledTimeChart.push(timeBlock);
  }
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center">
        <div className="flex-column h-[85%] w-[95%]">
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
            className="border-2 border-black overflow-y-scroll flex flex-col
            h-[75%]"
          >
            <div className="grid grid-cols-6 w-full">
              {/*column with time labeled*/}
              <div className="flex-col flex w-full">{labeledTimeChart}</div>
              {/* columns that will show actual plans */}
              <div className="col-start-2 col-span-5">
                <TimeChart></TimeChart>
              </div>
            </div>
          </div>
        </div>

        <ToolBar />
      </div>
    </>
  );
}

export default Chart;
