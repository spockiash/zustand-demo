import { useCounter } from "../store/counter.ts";

export default function CounterPage() {
    const count = useCounter((state) => state.count);
    const increment = useCounter((state) => state.increment);
    const decrement = useCounter((state) => state.decrement);
    const reset = useCounter((state) => state.reset);

    return (
        <>
            <h1>Counter</h1>
            <div className="counter-container">
                <div className="count-display">Count: {count}</div>
                <div className="counter-buttons">
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </>
      );
    }