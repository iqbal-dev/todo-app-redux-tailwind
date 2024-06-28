import { Button } from "../ui/button";
import DeleteIcon from "../ui/delete-icon";
import EditIcon from "../ui/edit-icon";

export default function TodoCard() {
  return (
    <div className="flex justify-between bg-white p-5 rounded-lg border">
      <input type="checkbox" />
      <p className="font-semibold">title</p>
      <p>descriptions</p>
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
