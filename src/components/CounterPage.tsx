import { useCounter } from "../store/counter.ts";

export default function CounterPage() {
    const count = useCounter((state) => state.count);
    const increment = useCounter((state) => state.increment);

    return (
        <>
            <h1>Counter</h1>
            <button onClick={increment}>
                count is {count}
            </button>
        </>
    )
}