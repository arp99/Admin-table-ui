import { actionConstants } from "../../Constants/actionConstants";
import { useUser } from "../../Context/userDataContext";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  const { userDispatch } = useUser();

  return (
    <div className="w-full h-16 flex items-center justify-between">
      <SearchBox />
      <button
        className="bg-white border-2 text-gray-400 border-gray-400 rounded-sm px-3 py-2"
        onClick={() => userDispatch({ type: actionConstants.deleteSelected })}
      >
        Delete Selected
      </button>
    </div>
  );
};
