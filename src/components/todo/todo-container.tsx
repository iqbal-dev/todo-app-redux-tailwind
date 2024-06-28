import { useAppSelector } from "@/redux/hooks";
import { TodoAddModal } from "./todo-add-modal";
import TodoCard from "./todo-card";
import { TodoFilter } from "./todo-filter";
import TodoNotFound from "./todo-not-found";

export default function TodoContainer() {
  const { todos } = useAppSelector((state) => state.todos);
  console.log("🚀 ~ TodoAddModal ~ todos:", todos);
  return (
    <div>
      <div className="mb-5 flex justify-between">
        <TodoAddModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-xl p-[5px]">
        <div className="bg-white rounded-lg p-5 space-y-3">
          {todos.length ? (
            todos.map((todo) => (
              <TodoCard
                key={todo.id}
                id={todo.id}
                title={todo.description}
                isCompleted={todo.isCompleted}
                description={todo.description}
              />
            ))
          ) : (
            <TodoNotFound />
          )}
        </div>
      </div>
    </div>
  );
}
