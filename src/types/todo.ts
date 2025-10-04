export type Todo = {
    id: string;
    title: string;
    ScheduleTypeId: string; // TODO: 先頭小文字に直す
    children: Todo[] | null;
};
