import { deleteTodo, toggleTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../ui/button";
import DeleteIcon from "../ui/delete-icon";
import EditIcon from "../ui/edit-icon";
type TTodoCardProps = {
  id?: string;
  title: string;
  description: string;
  priority: string;
  isCompleted?: boolean;
};
export default function TodoCard({
  id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) {
  console.log("🚀 ~ priority:", priority);
  const dispatch = useAppDispatch();

  const priorityClasses: { [key: string]: string } = {
    low: "green",
    medium: "yellow",
    high: "red",
  };

  console.log(priorityClasses[priority]);

  return (
    <div className="flex justify-between items-center bg-white p-5 rounded-lg border">
      <input
        className="cursor-pointer mr-10"
        onChange={() => dispatch(toggleTodo(id as string))}
        type="checkbox"
        checked={isCompleted}
      />
      <p className="flex-1 font-semibold">{title}</p>
      <div className="flex-1 flex items-center">
        <div
          className={`bg-${priorityClasses[priority]}-500 size-3 rounded-full mr-2`}
        ></div>
        <p>{priority}</p>
      </div>
      <p className="flex-1">{description}</p>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <div className="space-x-3">
        <Button
          onClick={() => dispatch(deleteTodo(id as string))}
          className="bg-red-500 hover:bg-red-500 hover:opacity-50"
        >
          <DeleteIcon />
        </Button>
        <Button className="bg-[#5C53FE] hover:bg-[#5C53FE] hover:opacity-50">
          <EditIcon />
        </Button>
      </div>
    </div>
  );
}
