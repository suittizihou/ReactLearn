export class TimerType {
    minutes: number;
    seconds: number;

    constructor(minutes: number, seconds: number) {
        this.minutes = minutes;
        this.seconds = seconds;
    }

    /*
    * タイマーの時間を設定する
    * 合計60分を超える時間の設定は不可
    */
    SetTimer(minutes: number, seconds: number): boolean {
        if (minutes > 60) {
            // 60分超えたらエラー
            alert("60分を超える時間の設定はできません");
            return false;
        }
        if (minutes === 60 && seconds > 0) {
            // 60分超えたらエラー
            alert("60分を超える時間の設定はできません");
            return false;
        }
        if (seconds >= 60) {
            // 60秒以上の場合エラー
            alert("60秒以上の時間の設定はできません");
            return false;
        }
        this.minutes = minutes;
        this.seconds = seconds;
        return true;
    }

    /*
    * カウントダウンを行う
    * 時間が0になったらfalseを返す
    */
    Countdown(): boolean {
        if (this.minutes === 0 && this.seconds === 0) {
            return false;
        }
        if (this.seconds === 0) {
            this.minutes--;
            this.seconds = 59;
        } else {
            this.seconds--;
        }
        return true;
    }
}