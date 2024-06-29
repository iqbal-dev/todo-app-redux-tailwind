import { useGetTodoQuery } from "@/redux/api/api";
import { useAppSelector } from "@/redux/hooks";
import { useMemo } from "react";
import DataLoader from "../ui/data-loader";
import { TodoAddModal } from "./todo-add-modal";
import TodoCard from "./todo-card";
import { TodoFilter } from "./todo-filter";
import TodoNotFound from "./todo-not-found";

export default function TodoContainer() {
  const todos = useAppSelector((state) => state.todos.todos);
  const { isLoading } = useGetTodoQuery(undefined);

  const todoCards = useMemo(() => {
    return todos.map(({ id, description, isCompleted }) => (
      <TodoCard
        key={id}
        id={id}
        title={description}
        isCompleted={isCompleted}
        description={description}
      />
    ));
  }, [todos]);

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <TodoAddModal />
        <TodoFilter />
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
