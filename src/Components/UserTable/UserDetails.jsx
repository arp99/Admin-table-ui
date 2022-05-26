import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { actionConstants } from "../../Constants/actionConstants";
import { useUser } from "../../Context/userDataContext";
import { EditModal } from "../EditModal/EditModal";

export const UserDetails = ({ user }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const { name, email, role, id, selected } = user;
  const { userDispatch } = useUser();

  const userDeleteHandler = () => {
    userDispatch({ type: actionConstants.deleteUser, payload: { userId: id } });
  };

  const selectUserHandler = () => {
    userDispatch({ type: actionConstants.selectUser, payload: { userId: id } });
  };

  return (
    <div
      className={`table-row text-center transition-colors ${
        selected && "bg-gray-300"
      }`}
    >
      <div className="table-cell w-8 border border-gray-400">
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={selected}
          onChange={selectUserHandler}
        />
      </div>
      <div className="table-cell border border-gray-400">{name}</div>
      <div className="table-cell border border-gray-400">{email}</div>
      <div className="table-cell border border-gray-400">{role}</div>
      <div className="table-cell border w-32 border-gray-400">
        <span className="flex justify-center gap-3 items-center h-full">
          <MdEdit
            size={20}
            color="#2f98ca"
            style={{ cursor: "pointer" }}
            onClick={() => setShowEditModal(true)}
          />{" "}
          <MdDelete
            size={20}
            color="#ef4444"
            style={{ cursor: "pointer" }}
            onClick={userDeleteHandler}
          />
        </span>
      </div>
      {showEditModal && (
        <EditModal user={user} setShowEditModal={setShowEditModal} />
      )}
    </div>
  );
};
