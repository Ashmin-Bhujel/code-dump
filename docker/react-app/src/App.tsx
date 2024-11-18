import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);

  function handleClick(x: string) {
    if (x === "-" && count > 0) {
      setCount((currentCount) => currentCount - 1);
    } else if (x === "+") {
      setCount((currentCount) => currentCount + 1);
    }
  }

  return (
    <main>
      <h1>Hello from Dockerized React Application</h1>
      <div className="counter">
        <p className="count-value">Count: {count}</p>
        <div className="count-btns">
          <button
            className="btn"
            onClick={() => {
              handleClick("-");
            }}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => {
              handleClick("+");
            }}
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
