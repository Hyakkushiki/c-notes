import { StateCreator } from "zustand";
import { ITask, ITasks } from "../types/ITask";

export const createTaskSlice: StateCreator<ITasks> = (set, get) => ({
  tasks: [],

  addTask(task: ITask) {
    set((state) => ({ tasks: [...state.tasks, task] }));
  },

  getTask(id: string) {
    const tasks = get().tasks;
    const foundTask = tasks.find((task) => task.id == id);
    return foundTask !== undefined ? foundTask : ({} as ITask);
  },

  editTask(editedTask: ITask) {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === editedTask.id ? editedTask : task
      ),
    }));
  },

  deleteTask(id: string) {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },

  UpdateTaskState(id) {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? ({ ...task, completed: !task.completed } as ITask)
          : task
      ),
    }));
  },

  currentTask: {} as ITask,

  setCurrentTask(task) {
    set((state) => ({ currentTask: task }));
  },
});
