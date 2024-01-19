import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/feature/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);
  return (
    <>
      <div className="flex flex-col gap-5 items-center text-center justify-center h-screen">
        <div className="flex gap-4 items-center border border-indigo-400 p-8 rounded-md bg-purple-100">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-300 px-3 py-2 rounded-md"
          >
            Increment
          </button>
          <p>{value}</p>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-300 px-3 py-2 rounded-md"
          >
            Decrement
          </button>
        </div>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-indigo-300 px-3 py-2 rounded-md"
        >
          Increment by 5
        </button>
      </div>
    </>
  );
}

export default App;
