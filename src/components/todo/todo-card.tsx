import { deleteTodo, toggleTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../ui/button";
import DeleteIcon from "../ui/delete-icon";
import EditIcon from "../ui/edit-icon";
type TTodoCardProps = {
  id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
export default function TodoCard({
  id,
  title,
  description,
  isCompleted,
}: TTodoCardProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between bg-white p-5 rounded-lg border">
      <input
        className="cursor-pointer"
        onChange={() => dispatch(toggleTodo(id as string))}
        type="checkbox"
        checked={isCompleted}
      />
      <p className="font-semibold">{title}</p>
      <p>{description}</p>
      <div>
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <div className="space-x-3">
        <Button
          onClick={() => dispatch(deleteTodo(id as string))}
          className="bg-red-500 hover:bg-red-300"
        >
          <DeleteIcon />
        </Button>
        <Button className="bg-[#5C53FE] hover:bg-[#538ffe]">
          <EditIcon />
        </Button>
      </div>
    </div>
  );
}
