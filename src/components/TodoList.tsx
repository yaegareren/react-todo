import { Todo } from "../types/todo";

interface TodoListProps {
  todo: Todo;
}

export default function TodoList({ todo }: TodoListProps) {
  return (
    <div>
      <label className="flex items-center gap-2 p-2 border rounded-md border-gray-400 bg-white hover:bg-slate-50">
        <input type="checkbox" className="scale-125" />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}
