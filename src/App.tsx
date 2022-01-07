import { useState, Suspense, startTransition } from "react";
import "./App.css";
import { Sleep1s } from "./components/Sleep1s";

function App() {
  const [sleepIsShown, setSleepIsShown] = useState(false);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {sleepIsShown ? <Sleep1s /> : null}
      </Suspense>
      <p>
        <button
          className="border p-1"
          onClick={() => {
            startTransition(() => {
              setSleepIsShown(true);
            });
          }}
        >
          Show Sleep1s
        </button>
      </p>
    </div>
  );
}

export default App;
