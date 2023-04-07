export interface ITask {
  id?: string;
  title?: string;
  content: string;
  completed: boolean;
  last_edited_time?: Date;
  created_time?: Date;
}

export interface ITasks {
  tasks: Array<ITask>;
  addTask: (task: ITask) => void;
  getTask: (id: string) => ITask;
  editTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
  UpdateTaskState: (id: string) => void;

  currentTask: ITask;
  setCurrentTask: (task: ITask) => void;
}
