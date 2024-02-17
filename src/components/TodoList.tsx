import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoListProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todo,
  onCompletedChange,
  onDelete,
}: TodoListProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 p-2 border rounded-md border-gray-400 bg-white hover:bg-slate-50 grow ">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="p-2">
        <Trash2 size={20} className="text-gray-500 hover:text-gray-600" />
      </button>
    </div>
  );
}
