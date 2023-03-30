import React, { useEffect, useState } from "react";
import { useBoundStore } from "../store/sliceStateTest";

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

      <Bears />
      <br />
      <Fish />
    </div>
  );
};

export default StateTest;

const styles = {
  button: "w-40 h-8 cursor-pointer bg-red-500 text-white rounded border-black",
};

function Bears() {
  const bears = useBoundStore((state) => state.bears);
  const addBear = useBoundStore((state) => {
    return state.addBear;
  });
  const eatFish = useBoundStore((state) => state.eatFish);

  const [bearVal, setBearVal] = useState(0);

  useEffect(() => {
    setBearVal(bears);
  }, [bears]);

  return (
    <div>
      Bears: {bearVal} |{" "}
      <button onClick={() => addBear()} className={`${styles.button}`}>
        add bear
      </button>{" "}
      |{" "}
      <button onClick={() => eatFish()} className={`${styles.button}`}>
        All bears eat fish
      </button>
    </div>
  );
}

const Fish = () => {
  const fishes = useBoundStore((state) => state.fishes);
  const addFish = useBoundStore((state) => state.addFish);

  const [fishVal, setFishVal] = useState(0);

  useEffect(() => {
    setFishVal(fishes);
  }, [fishes]);

  return (
    <div>
      Fishes: {fishVal} |{" "}
      <button onClick={() => addFish()} className={`${styles.button}`}>
        add fish
      </button>
    </div>
  );
};
