import Chart from "./components/Chart/Chart";
import { TaskContextBundle } from "./components/_context/_taskContext";
import { PlanContextBundle } from "./components/_context/_planContext";

//Main App function
function App() {
  return (
    <>
      <PlanContextBundle>
        <TaskContextBundle>
          <div className="h-screen w-full flex flex-row justify-center">
            <Chart />
          </div>
        </TaskContextBundle>
      </PlanContextBundle>
    </>
  );
}

export default App;
