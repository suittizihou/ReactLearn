import React, { useCallback, useState, useEffect } from 'react';
import { useTimer } from "../logic/useTimer"
import { TimerType } from "../types/timerType";
import { InputNumber } from '../components/inputNumber';
import { MyButton } from '../components/button';

export function TimerApp() {
    const [timer, pause, SetTimer, Countdown, SetPause] = useTimer(new TimerType(0, 0));
    const [resetFlag, setResetFlag] = useState(false);

    // メモ化（timerなどの値が変更された時にuseEffectが再実行されるのを防ぐ目的）
    const handleCountdown = useCallback(() => {
        Countdown();
        SetTimer(timer.minutes, timer.seconds);
    }, [Countdown, SetTimer, timer.minutes, timer.seconds]);

    useEffect(() => {
        if (pause) return; // ポーズ中なら何もしない

        const interval = setInterval(() => {
            handleCountdown();
        }, 1000);

        return () => clearInterval(interval);
    }, [pause, handleCountdown]);

    return (
        <div>
            <h1>Timer App</h1>
            <InputNumber
                key={`min-${resetFlag}`}
                value={timer.minutes}
                onChange={(value) => SetTimer(value, timer.seconds)} />
            <label htmlFor="">分</label>

            <InputNumber
                key={`sec-${resetFlag}`}
                value={timer.seconds}
                onChange={(value) => SetTimer(timer.minutes, value)} />
            <label>秒</label>
            <br />
            <MyButton title='スタート' onClick={() => { SetPause(false) }} />
            <MyButton title='一時停止' onClick={() => SetPause(true)} />
            <MyButton title='リセット' onClick={() => {
                SetPause(true)
                SetTimer(0, 0)
                setResetFlag(!resetFlag); // InputNumberの値を初期化するためにフラグ更新
            }} />

            <h1>{timer.minutes}分{timer.seconds}秒</h1>
        </div>
    )
}