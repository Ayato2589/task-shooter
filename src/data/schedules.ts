import type { Schedule, ScheduleType } from "../types/schedule";

export const scheduleTypes: Record<string, ScheduleType> = {
  'a': {
    id: 'a',
    title: 'プログラミング',
  },
  'b': {
    id: 'b',
    title: 'ミーティング',
  },
  'c': {
    id: 'c',
    title: '昼休憩',
  },
};

export const initialSchedules: Schedule[] = [
  {
    id: '1',
    typeId: 'a',
    startTime: {
      hour: 10,
      minute: 0,
    },
    endTime: {
      hour: 12,
      minute: 0,
    },
    repeat: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  },
  {
    id: '2',
    typeId: 'b',
    startTime: {
      hour: 13,
      minute: 0,
    },
    endTime: {
      hour: 14,
      minute: 0,
    },
    repeat: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  },
  {
    id: '3',
    typeId: 'c',
    startTime: {
      hour: 12,
      minute: 0,
    },
    endTime: {
      hour: 13,
      minute: 0,
    },
    repeat: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  },
];
