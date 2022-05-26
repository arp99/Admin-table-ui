export const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search by name, email or role"
        className="w-64 border-2 border-gray-400 rounded-sm px-1 py-2 placeholder:text-gray-400"
      />
      <button className="bg-white border-2 text-gray-400 border-gray-400 rounded-sm px-3 py-2">Delete Selected</button>
    </div>
  );
};
