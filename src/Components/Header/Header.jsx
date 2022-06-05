import { actionConstants } from "../../Constants/actionConstants";
import { useUser } from "../../Context/userDataContext";
import { SearchBox } from "./SearchBox";
import { RiDeleteBin6Line } from "react-icons/ri";
import { isAnyRowSelected } from "../../Utils/isAnyRowSelected";

export const Header = ({ filteredData }) => {
  const { userDispatch } = useUser();

  return (
    <div className="w-full h-[60px] gap-4 flex items-center justify-between">
      <SearchBox />
      <button
        className={`bg-lightGray dark:bg-blueGray dark:text-white text-lightText transition-all ${
          isAnyRowSelected(filteredData)
            ? "w-32 opacity-100"
            : "w-0 opacity-0 overflow-hidden"
        } h-full flex items-center justify-center gap-2 rounded-2xl hover:bg-gray-400 hover:shadow-lg dark:hover:bg-slate-700 focus:shadow-hover`}
        onClick={() => userDispatch({ type: actionConstants.deleteSelected })}
      >
        <RiDeleteBin6Line size={15} /> <span>delete</span>
      </button>
    </div>
  );
};
