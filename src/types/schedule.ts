type Day = (
    'MON' |
    'TUE' |
    'WED' |
    'THU' |
    'FRI' |
    'SAT' |
    'SUN'
);

export type ScheduleType = {
    id: string;
    title: string;
}

export type Time = {
    hour: number;
    minute: number;
}

export type Schedule = {
    id: string;
    typeId: string;
    startTime: Time;
    endTime: Time;
    repeat: Day[];
};
