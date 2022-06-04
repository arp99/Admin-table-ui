import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { actionConstants } from "../../Constants/actionConstants";
import { useUser } from "../../Context/userDataContext";
import { EditModal } from "../EditModal/EditModal";

export const UserDetails = ({ user, headers }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const { id, selected } = user;
  const { userDispatch } = useUser();

  const userDeleteHandler = () => {
    userDispatch({ type: actionConstants.deleteUser, payload: { userId: id } });
  };

  const selectUserHandler = () => {
    userDispatch({ type: actionConstants.selectUser, payload: { userId: id } });
  };

  return (
    <div
      className={`text-center transition-colors h-12 flex items-center justify-between w-full border-0 border-b-2 border-lightGray last:border-none ${
        selected && "bg-lightGray"
      }`}
    >
      <div className="w-8">
        <input
          type="checkbox"
          className="w-5 h-4 accent-lightblue"
          name={id}
          id={id}
          checked={selected}
          onChange={selectUserHandler}
        />
      </div>
      {headers.map((header, index) => (
        <div className="w-1/4" key={header + index + Math.random()}>
          {user[header.title]}
        </div>
      ))}

      <div className="w-1/5 flex justify-center gap-5 items-center group cursor-pointer">
        <div className="bg-lightGray p-2 rounded-full text-lightText transition-opacity opacity-0 group-hover:opacity-100">
          <RiDeleteBin6Line
            size={15}
            style={{ cursor: "pointer" }}
            onClick={userDeleteHandler}
          />
        </div>
        <div className="bg-lightGray p-2 rounded-full text-lightText transition-opacity opacity-0 group-hover:opacity-100">
          <MdEdit
            size={15}
            style={{ cursor: "pointer" }}
            onClick={() => setShowEditModal(true)}
          />
        </div>
      </div>
      {showEditModal && (
        <EditModal user={user} setShowEditModal={setShowEditModal} />
      )}
    </div>
  );
};
