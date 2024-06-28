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
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
