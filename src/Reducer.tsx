import React, { useReducer } from "react";

type Actions = { type: "add"; text: string } | { type: "remove"; id: number };

interface Todo {
  text: string;
  complete: boolean;
}

type State = Todo[]; //Array<Todo>

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];

    case "remove":
      return state.filter((_, i) => action.id !== i);

    default:
      return state;
  }
};

export const Reducer: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          dispatch({ type: "add", text: "..." });
        }}
      >
        +
      </button>
    </div>
  );
};
