import { useCounter } from "../logic/useCount";
import { MyButton } from "../components/button";

export function CounterApp() {
    const [count, addCount, subCount, resetCount] = useCounter(0);

    return (
        <>
            <h1>カウンターアプリ</h1>
            <div>
                <MyButton title="値を足す" onClick={ addCount }/>
                <MyButton title="値を引く" onClick={ subCount }/>
                <MyButton title="値をリセット" onClick={ resetCount }/>
                <p>{count}</p>
            </div>
        </>
    );
}