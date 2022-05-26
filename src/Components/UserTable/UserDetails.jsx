import { MdEdit, MdDelete } from "react-icons/md";

export const UserDetails = ({ user }) => {
  const { name, email, role, id } = user;
  return (
    <div className="table-row text-center">
      <div className="table-cell w-8 border border-gray-400">
        <input type="checkbox" name={id} id={id} />
      </div>
      <div className="table-cell border border-gray-400">{name}</div>
      <div className="table-cell border border-gray-400">{email}</div>
      <div className="table-cell border border-gray-400">{role}</div>
      <div className="table-cell border w-32 border-gray-400">
        <span className="flex justify-center gap-3 items-center h-full">
          <MdEdit size={20} color="#2f98ca" />{" "}
          <MdDelete size={20} color="#ef4444" />
        </span>
      </div>
    </div>
  );
};
