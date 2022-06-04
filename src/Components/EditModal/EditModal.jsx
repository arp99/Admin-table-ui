import { useState } from "react";
import { actionConstants } from "../../Constants/actionConstants";
import { useUser } from "../../Context/userDataContext";

export const EditModal = ({ user, setShowEditModal }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const { userDispatch } = useUser();

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex justify-center items-center backdrop-blur-sm"
      onClick={() => setShowEditModal(false)}
    >
      <div
        className="w-80 bg-white shadow-lg border border-gray-400 p-2 rounded-xl"
        onClick={(evt) => evt.stopPropagation()}
      >
        <h2>Edit Details</h2>
        <div className="w-full flex flex-col items-start gap-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="border border-gray-400 w-full outline-none p-1 rounded-xl"
            onChange={(evt) => setName(evt.target.value)}
            value={name}
          />
        </div>
        <div className="w-full flex flex-col items-start gap-3 mt-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="border border-gray-400 w-full outline-none p-1 rounded-xl"
            onChange={(evt) => setEmail(evt.target.value)}
            value={email}
          />
        </div>
        <div className="w-full flex flex-col items-start gap-3 mt-2">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            className="border border-gray-400 w-full outline-none p-1 rounded-xl"
            onChange={(evt) => setRole(evt.target.value)}
            value={role}
          />
        </div>
        <div className="w-full flex justify-between gap-3 mt-2">
          <button
            className="bg-lightText text-white px-4 py-1 rounded-xl"
            onClick={() => {
              userDispatch({
                type: actionConstants.editUser,
                payload: { name, email, role, id: user.id },
              });
              setShowEditModal(false);
            }}
          >
            Update
          </button>
          <button
            className="bg-lightText text-white px-4 py-1 rounded-xl"
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
