import { Suspense, useState, useTransition } from "react";
import "./App.css";
import { ShowData } from "./components/ShowData";
import { useTime } from "./hooks/useTime";

function App() {
  const [counter, setCounter] = useState(0);
  const time = useTime();
  const [isPending, startTransition] = useTransition();
  const [isPending2, startTransition2] = useTransition();
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <p className={"tabular-nums" + (isPending ? " text-blue-700" : "")}>
        🕒 {time}
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        <ShowData dataKey={counter} />
      </Suspense>
      <p>
        <button
          className="border p-1"
          onClick={() => {
            startTransition(() => {
              setCounter((c) => c + 1);
            });
            startTransition2(() => {
              setCounter((c) => c + 5);
            });
          }}
        >
          Counter is {counter}
        </button>
      </p>
    </div>
  );
}

export default App;
