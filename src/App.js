import "./App.css";
import { UserTable } from "./Components";
import { useUser } from "./Context/userDataContext";

export default function App() {
  const headers = [{ title: "name" }, { title: "email" }, { title: "role" }];
  const {
    userData: { userDataFetchStatus },
  } = useUser();
  return (
    <div className="App transition-colors dark:bg-bgDark">
      <main className="w-full md:w-[90%] lg:w-[70%] h-full pt-5 px-2 mx-auto dark:text-white">
        {userDataFetchStatus === "fulfilled" && <UserTable headers={headers} />}
        {userDataFetchStatus === "error" && (
          <h1 className="text-center dark:text-white">
            Error in Fetching data
          </h1>
        )}
        {userDataFetchStatus === "idle" && (
          <h1 className="text-center dark:text-white">Loading...</h1>
        )}
      </main>
    </div>
  );
}
