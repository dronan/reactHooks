import { useState } from "react";

export const useCounter = (initialState = 100) => {
    const [count, setCount] = useState(initialState);

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    return [count, inc, dec];
};