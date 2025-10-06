import { useMemo } from "react";
import { useCursor } from "./useCursor";
import { useSchedules } from "./useSchedules";
import { useTodos } from "./useTodos";
import { getDay, toHHMM } from "../lib/time";
import { getScheduleStart } from "../lib/schedule";
import { scheduleTypes } from "../data/schedules";
import type { Todo } from "../types/todo";

export type TodayTodo = {
    id: string;
    title: string;
    cursorIdx: number;
    children: TodayTodo[];
};

export type TodaySchedule = {
    id: string;
    title: string;
    startTime: string; // HH:MM
    endTime: string; // HH:MM
    todos: TodayTodo[];
};

export function useScheduleTimeLine() {
    const {
        schedules
    } = useSchedules();

    const {
        todos,
        toggleTodo,
    } = useTodos();

    const {
        cursor,
        cursorUp,
        cursorDown,
    } = useCursor();

    let currCursorIdx = 0;

    const extractTodaySchedules = (): TodaySchedule[] => {
        // 今日の曜日を取得
        const day = getDay(new Date());
        console.log(day);

        // 曜日に対応するスケジュールを取得
        const schedulesForDay = schedules.filter(s => s.repeat.includes(day));

        // 時刻が早い順にソート
        const sorted = schedulesForDay.sort(
            (a, b) => getScheduleStart(a) - getScheduleStart(b)
        );

        // 各スケジュールに対応したタスクを紐づける
        function assignCursorIdxToTodos(todos: Todo[]): TodayTodo[] {
            return todos.map((t) => ({
                id: t.id,
                title: t.title,
                cursorIdx: currCursorIdx++,
                children: assignCursorIdxToTodos(t.children ?? []),
            }));
        }

        function filterUncompletedTodos(todos: Todo[]): Todo[] {
            return todos
                .filter((t) => !t.isCompleted)
                .map((t) => ({
                    ...t,
                    children: filterUncompletedTodos(t.children ?? []),
            }));
        }
        const todaySchedules: TodaySchedule[] = sorted.map((s) => {
            const type = scheduleTypes[s.typeId];
            const todosForSchedule = filterUncompletedTodos(
                todos.filter((t) => t.ScheduleTypeId === s.typeId)
            );


            return {
                id: s.id,
                title: type.title,
                startTime: toHHMM(s.startTime.hour, s.startTime.minute),
                endTime: toHHMM(s.endTime.hour, s.endTime.minute),
                todos: assignCursorIdxToTodos(todosForSchedule),
            };
        });

        return todaySchedules;
    };

    const getTodoIdByCursor = (cursor: number, todaySchedules: TodaySchedule[]): string | null => {
        for (const schedule of todaySchedules) {
            const found = findTodoByCursor(schedule.todos, cursor);
            if (found) return found.id;
        }
        return null;
    };

    // 再帰的に探索
    const findTodoByCursor = (todos: TodayTodo[], cursor: number): TodayTodo | null => {
        for (const todo of todos) {
            if (todo.cursorIdx === cursor) return todo;
            if (todo.children.length > 0) {
                const found = findTodoByCursor(todo.children, cursor);
                if (found) return found;
            }
        }
        return null;
    };
    const todaySchedules = useMemo(() => extractTodaySchedules(), [schedules, todos]);

    return {
        cursor,
        cursorUp,
        extractTodaySchedules,
        cursorDown: () => cursorDown(currCursorIdx-1),
        addTodo: () => {
            
        },
        editTodo: () => {},
        completeTodo: () => {
            const id = getTodoIdByCursor(cursor, todaySchedules);
            if (!id) return;
            toggleTodo(id);
        },
    };
}