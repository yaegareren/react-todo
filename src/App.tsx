import { useState } from "react";
import { myTodos } from "./data/todos";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState(myTodos);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <main className="py-10 h-screen bg-zinc-100 space-y-5 overflow-y-auto">
        <h1 className="font-extrabold text-2xl text-center">
          To-do Application using React.js and Typescript
        </h1>
        <div className="max-w-lg bg-zinc-200 mx-auto p-4 rounded-md space-y-6 ">
          <AddTodo onSubmit={addTodo} />
          <TodoItem
            todos={todos}
            onCompletedChange={setTodoCompleted}
            onDelete={deleteTodo}
          />
        </div>
      </main>
    </>
  );
}

export default App;
