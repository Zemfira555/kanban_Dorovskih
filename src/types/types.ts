export type Task = {
    id: number;
    title: "Backlog" | "Ready" | "In progress" | "Finished";
}

export type TasksState = {
    backlog: Task;
    ready: Task;
    inProgress: Task;
    finished: Task;
}

export type Card = {
    id: number;
    type: number
    title: string;
    description: string;
}