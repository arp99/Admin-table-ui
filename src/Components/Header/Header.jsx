import { actionConstants } from "../../Constants/actionConstants";
import { useUser } from "../../Context/userDataContext";
import { SearchBox } from "./SearchBox";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Header = () => {
  const { userDispatch } = useUser();

  return (
    <div className="w-full h-[60px] gap-4 flex items-center justify-between">
      <SearchBox />
      <button
        className="bg-lightGray text-lightText w-32 h-full flex items-center justify-center gap-2 rounded-2xl transition-shadow focus:shadow-hover"
        onClick={() => userDispatch({ type: actionConstants.deleteSelected })}
      >
        <RiDeleteBin6Line size={15} /> <span>delete</span>
      </button>
    </div>
  );
};
