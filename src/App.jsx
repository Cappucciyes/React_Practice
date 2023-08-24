import Chart from "./components/Chart/Chart";
import { TaskContextBundle } from "./components/_context/_context";

//Main App function
function App() {
  return (
    <>
      <TaskContextBundle>
        <div className="h-screen w-full flex flex-row justify-center">
          <Chart />
        </div>
      </TaskContextBundle>
    </>
  );
}

export default App;
