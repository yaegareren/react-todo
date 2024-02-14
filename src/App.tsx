import TodoList from "./components/TodoList";
import { myTodos } from "./data/todos";

function App() {
  function setTodoCompleted(id: number, completed: boolean) {
    alert(
      `Todo with id ${id} is now ${completed ? "completed" : "not completed"}`
    );
  }

  return (
    <>
      <main className="py-10 h-screen bg-zinc-100 space-y-5">
        <h1 className="font-extrabold text-2xl text-center">
          To-do Application using React.js and Typescript
        </h1>
        <div className="max-w-lg bg-zinc-200 mx-auto p-4 ">
          <div className="space-y-2">
            {myTodos.map((todo) => (
              <TodoList
                key={todo.id}
                todo={todo}
                onCompletedChange={setTodoCompleted}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
