import { useState } from "react";
import { TimerType } from "../types/timerType";

export function useTimer(initialTimer: TimerType): readonly [TimerType, boolean, (minutes: number, seconds: number) => boolean, () => boolean, (isPause: boolean) => void] {
    const [pause, setPause] = useState(true);
    const [timer, setTimer] = useState(initialTimer);

    function SetTimer(minutes: number, seconds: number): boolean {
        const result = timer.SetTimer(minutes, seconds);
        setTimer(new TimerType(timer.minutes, timer.seconds));
        return result;
    }

    function Countdown(): boolean {
        if (pause) {
            return false;
        }

        const timeOver = timer.Countdown();
        setTimer(new TimerType(timer.minutes, timer.seconds));
        return timeOver;
    }

    function SetPause(isPause: boolean) {
        setPause(isPause);
    }

    return [ timer, pause, SetTimer, Countdown, SetPause] as const;
}