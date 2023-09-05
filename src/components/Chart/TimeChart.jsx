import Plan from "./Plan";

function TimeChart() {
  let timeChart = [];

  for (let i = 1; i < 6; i++) {
    let plans = [];

    let hourTracker = 1;
    for (let j = 0; j < 1440; j += 15) {
      let background = ["bg-gray-200", null];

      if (j % 4 == 0) {
        if (hourTracker == 1) {
          hourTracker--;
        } else {
          hourTracker++;
        }
      }

      plans.push(
        <div
          className="h-[1/96]"
          key={`day${i}time${j}`}
          id={`day${i}time${j}`}
        >
          <div
            id="target"
            className={`h-full border-gray-500 border ${background[hourTracker]}`}
          ></div>
        </div>
      );
    }

    timeChart.push(
      <div className="grid grid-cols-1 h-full" key={`day${i}`}>
        {plans}
      </div>
    );
  }
  return (
    <>
      <div
        className="grid grid-cols-5 h-full relative"
        id="timeChartBackground"
      >
        {timeChart}
        <Plan />
      </div>
    </>
  );
}

export default TimeChart;
