import { useState } from "react";
import { myTodos } from "./data/todos";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoSummary from "./components/TodoSummary";

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
        id: Date.now(), // using timestamps in milliseconds as id
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
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
        <TodoSummary
          todos={todos}
          deleteAllCompleted={deleteAllCompletedTodos}
        />
      </main>
    </>
  );
}

export default App;
