import TodoRender from "./Todo";
import CounterComponent from "./UseMemoEx";
import ParentComponent from "./UseCallBackEx";
function App() {
  return (
    <div>
      <TodoRender />
      <ParentComponent />
      {/* <CounterComponent /> */}
    </div>
  );
}

export default App;
