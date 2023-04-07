import { ITask, ITasks } from "@/store/types/ITask";
import React, { use, useEffect, useState } from "react";
import { useStore } from "../store/useStore";

const StateTest: React.FC = (): JSX.Element => {
  //   const [todo, setTodo] = React.useState<string>("");

  //   const add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     addTodo(todo);
  //   };

  return (
    <div>
      <h1>Zustand State Tests</h1>
      <br />
      {/* <input type="text" onChange={(e) => setTodo(e.currentTarget.value)} /> */}
      {/* <button onClick={add}>add</button>
      {todos.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}

      <Tasks />
    </div>
  );
};

export default StateTest;

const styles = {
  button: "w-40 h-8 cursor-pointer bg-red-500 text-white rounded border-black",
};

function Tasks() {
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);
  const getTask = useStore((state) => state.getTask);
  const editTask = useStore((state) => state.editTask);
  const deleteTask = useStore((state) => state.deleteTask);
  const UpdateTaskState = useStore((state) => state.UpdateTaskState);
  const currentTask = useStore((state) => state.currentTask);
  const setCurrentTask = useStore((state) => state.setCurrentTask);

  const [stateTasks, setStateTasks] = useState<ITask[]>([]);
  const [stateTask, setStateTask] = useState<ITask>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setStateTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    if (!currentTask) {
      setStateTask(currentTask);
    }

    setStateTask({ title: title, content: content, completed: completed });
  }, [currentTask, title, content, completed]);

  const NewTaskForm = () => {
    return (
      <>
        <div className="">Add a New Note</div>

        <div className="">
          <input
            className="w-60 h-8 border mx-0 my-[5px] rounded-[5px] border-solid border-gray-300"
            placeholder="Enter the Title.."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="">
          <textarea
            className="w-60"
            placeholder="Task..."
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>

        {!!stateTask ? (
          <button
            onClick={() => addTask(stateTask)}
            className={`${styles.button}`}
          >
            add task
          </button>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <>
      {/* Tasks:{" "}
      {tasks.map((task) => {
        return (
          <>
            <h2>{task.title}</h2>
            <p>{task.content}</p>
          </>
        );
      })} */}
      <NewTaskForm />
      <br />
      Tasks: {JSON.stringify(stateTasks)} :: {stateTasks.length === 0}
      <br />
      {stateTasks.map((task) => {
        <>
          <h2>{task.title}</h2>
          <div>{task.content}</div>
          <div>
            <label>completed?</label>
            <input
              type="checkbox"
              onClick={() => setCompleted(!completed)}
              checked={completed}
            />
          </div>
        </>;
      })}
    </>
  );
}
