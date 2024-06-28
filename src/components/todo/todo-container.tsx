import { TodoAddModal } from "./todo-add-modal";
import TodoCard from "./todo-card";
import { TodoFilter } from "./todo-filter";

export default function TodoContainer() {
  return (
    <div>
      <div className="mb-5 flex justify-between">
        <TodoAddModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-xl p-[5px]">
        <div className="bg-white rounded-lg p-5 space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
}
