export class TodoType {
    id: string;
    title: string;
    isDone: boolean;

    constructor(title: string, isDone: boolean) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.isDone = isDone;
    }

    SetState(isDone: boolean) {
        this.isDone = isDone;
    }
}