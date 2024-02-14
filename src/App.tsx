import { myTodos } from "./data/todos";

function App() {
  return (
    <>
      <main className="py-10 bg-zinc-100 h-screen">
        <h1 className="font-extrabold text-2xl text-center">
          To-do Application using React.js and Typescript
        </h1>
        <div className="max-w-lg mx-auto">
          <div className="space-y-2">
            {myTodos.map((todo) => (
              <p className="font-normal text-lg" key={todo.id}>
                {todo.title}
              </p>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
