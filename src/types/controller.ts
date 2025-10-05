export interface Controller {
    // Schedule template
    addScheduleTemplate(): () => void;
    updateScheduleTemplate(): () => void;
    deleteScheduleTemplate(): () => void;

    // Schedule
    addSchedule(): () => void;
    updateSchedule(): () => void;
    deleteSchedule(): () => void;

    // Todo
    addTodo(): () => void;
    updateTodo(): () => void;
    completeTodo(): () => void;
}