import TodoContainer from "@/components/todo/todo-container";

export default function Todo() {
  return (
    <div>
      {" "}
      <div>
        <h1 className="my-10 text-center font-semibold text-3xl">My Todo</h1>
      </div>
      <TodoContainer />
    </div>
  );
}
