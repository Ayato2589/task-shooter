import { useState } from "react";
import { initialSchedules } from "../data/schedules";
import { getScheduleStart } from "../lib/schedule";
import type { Schedule } from "../types/schedule";

export function useSchedules() {
  const [schedules, setSchedules] = useState<Schedule[]>(initialSchedules);

  const addSchedule = (schedule: Schedule) => {
    setSchedules((prev) => [...prev, schedule]);
  };

  const updateSchedule = (
    id: string,
    updated: Partial<Schedule>
  ) => {
    setSchedules((prev) =>
      prev.map((schedule) => {
        if (schedule.id !== id) return schedule;

          return { ...schedule, ...updated };
        }
      )
    );
  };

  const removeSchedule = (id: string) => {
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== id));
  };
  
  const sortSchedulesByTime = (list: Schedule[] = schedules) => {
    return [...list].sort((a, b) => {
      return getScheduleStart(a) - getScheduleStart(b);
    });
  };

  return {
    schedules,
    addSchedule,
    updateSchedule,
    removeSchedule,
    sortSchedulesByTime,
  };
}
