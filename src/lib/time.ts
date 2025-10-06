import type { Day } from "../types/schedule";

export function toHHMM(hour: number, minute: number): string {
    const hh = String(hour).padStart(2, "0");
    const mm = String(minute).padStart(2, "0");
    return `${hh}:${mm}`;
}

export function toMMDD(date: Date): string {
    return `${date.getMonth()+1}/${date.getDate()}`
}

export function getDay(date: Date): Day {
    const days: Day[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[date.getDay()];
}