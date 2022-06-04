import "./App.css";
import { UserTable } from "./Components";

export default function App() {
  const headers = [
    { title: "name" },
    { title: "email" },
    { title: "role" },
  ];

  return (
    <div className="App">
      <main className="bg-white w-full md:w-[90%] lg:w-[60%] h-full pt-5 mx-auto">
        <UserTable headers={headers} />
      </main>
    </div>
  );
}
