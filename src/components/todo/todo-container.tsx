import { useGetTodoQuery } from "@/redux/api/api";
import { useAppSelector } from "@/redux/hooks";
import { useMemo, useState } from "react";
import DataLoader from "../ui/data-loader";
import { TodoAddModal } from "./todo-add-modal";
import TodoCard from "./todo-card";
import { TodoFilter } from "./todo-filter";
import TodoNotFound from "./todo-not-found";

export default function TodoContainer() {
  const [filterValue, setFilterValue] = useState("");
  const todos = useAppSelector((state) => state.todos.todos);
  const { isLoading } = useGetTodoQuery(undefined);

  const todoCards = useMemo(() => {
    return todos
      .filter((todo) => (filterValue ? todo.priority === filterValue : true))
      .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
      .map(({ id, description, isCompleted, priority }) => (
        <TodoCard
          key={id}
          id={id}
          title={description}
          isCompleted={isCompleted}
          description={description}
          priority={priority}
        />
      ));
  }, [todos, filterValue]);

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <TodoAddModal />
        <TodoFilter filterValue={filterValue} setFilterValue={setFilterValue} />
      </div>
      <div className="bg-primary-gradient rounded-xl p-[5px]">
        <div className="bg-white rounded-lg p-5 space-y-3">
          {isLoading ? (
            <DataLoader />
          ) : todos.length ? (
            todoCards
          ) : (
            <TodoNotFound />
          )}
        </div>
      </div>
    </div>
  );
}
