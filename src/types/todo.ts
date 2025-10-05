export type Todo = {
    id: string;
    title: string;
    ScheduleTypeId: string; // TODO: 先頭小文字に直す
    oneTimeScheduleId?: string; // 単発予定に紐付けたい場合のみ
    isCompleted: boolean;
    children: Todo[] | null;
};
