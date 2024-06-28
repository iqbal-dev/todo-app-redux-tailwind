import { generateRandomBase36 } from "@/utils/generateRandomBase36";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
  id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: TInitialState, action: PayloadAction<TTodo>) => {
      const id = generateRandomBase36();
      state.todos.push({ ...action.payload, id, isCompleted: false });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos
        .map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isCompleted: !todo.isCompleted };
          }
          return todo;
        })
        .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
