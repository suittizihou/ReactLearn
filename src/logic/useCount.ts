import { useState } from "react";

// カウンターのロジックを持つカスタムフック
export function useCounter(initialValue: number = 0): readonly [number, () => void, () => void, () => void] {
    const [count, setCount] = useState(initialValue);

    function AddCount() {
        setCount((prev) => prev + 1);
    }

    function SubCount() {
        setCount((prev) => prev - 1);
    }

    function ResetCount() {
        setCount(initialValue);
    }

    return [ count, AddCount, SubCount, ResetCount ] as const;
}