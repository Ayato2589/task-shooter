import type { Todo } from "../types/todo";

export const initialTodos: Todo[] = [
  {
    id: "todo1",
    title: "設計",
    ScheduleTypeId: "a", // プログラミング
    children: [
      {
        id: "todo1-1",
        title: "仕様書確認",
        ScheduleTypeId: "a",
        children: null,
      },
      {
        id: "todo1-2",
        title: "設計図作成",
        ScheduleTypeId: "a",
        children: null,
      },
    ],
  },
  {
    id: "todo2",
    title: "実装",
    ScheduleTypeId: "a", // プログラミング
    children: [
      {
        id: "todo2-1",
        title: "コンポーネント作成",
        ScheduleTypeId: "a",
        children: null,
      },
      {
        id: "todo2-2",
        title: "テストコード記述",
        ScheduleTypeId: "a",
        children: null,
      },
    ],
  },
  {
    id: "todo3",
    title: "進捗確認",
    ScheduleTypeId: "b", // ミーティング
    children: [
      {
        id: "todo3-1",
        title: "前回議事録確認",
        ScheduleTypeId: "b",
        children: null,
      },
      {
        id: "todo3-2",
        title: "今週の課題整理",
        ScheduleTypeId: "b",
        children: null,
      },
    ],
  },
];
