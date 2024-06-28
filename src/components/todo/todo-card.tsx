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
  return (
    <div className="flex justify-between bg-white p-5 rounded-lg border">
      <input type="checkbox" />
      <p className="font-semibold">{title}</p>
      <p>{description}</p>
      <div>
        <span className={`text-${isCompleted ? "green-500" : "gray-400"}`}>
          {isCompleted ? "Completed" : "Pending"}
        </span>
      </div>
      <div className="space-x-3">
        <Button className="bg-red-500 hover:bg-red-300">
          <EditIcon />
        </Button>
        <Button className="bg-[#5C53FE] hover:bg-[#538ffe]">
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}
