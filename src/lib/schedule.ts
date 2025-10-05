import type { Schedule } from "../types/schedule";

export function getScheduleStart(s: Schedule): number {
    return  s.startTime.hour * 60 + s.startTime.minute;
}

export function getScheduleEnd(s: Schedule): number {
    return s.endTime.hour * 60 + s.endTime.minute;
}
