import type { TodaySchedule } from "../hooks/useScheduleTimeline";

export const dummySchedules: TodaySchedule[] = [
    {
        id: "schedule-1",
        title: "午前業務",
        startTime: "09:00",
        endTime: "12:00",
        todos: [
            {
                id: "todo-1",
                title: "メールチェック",
                cursorIdx: 0,
                children: [],
            },
            {
                id: "todo-2",
                title: "チームミーティング",
                cursorIdx: 1,
                children: [
                    { id: "todo-2-1", title: "議題整理", cursorIdx: 2, children: [] },
                    { id: "todo-2-2", title: "発表準備", cursorIdx: 3, children: [] },
                ],
            },
        ],
    },
    {
        id: "schedule-2",
        title: "午後業務",
        startTime: "13:00",
        endTime: "17:00",
        todos: [
            { id: "todo-3", title: "コードレビュー", cursorIdx: 4, children: [] },
            {
                id: "todo-4",
                title: "新機能設計",
                cursorIdx: 5,
                children: [
                    { id: "todo-4-1", title: "要件整理", cursorIdx: 6, children: [] },
                    { id: "todo-4-2", title: "仕様書作成", cursorIdx: 7, children: [] },
                ],
            },
        ],
    },
];
