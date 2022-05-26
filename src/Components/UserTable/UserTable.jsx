import React from "react";
import { Header } from "../Header/Header";
import { useUser } from "../../Context/userDataContext";
import { UserDetails } from "./UserDetails";
import { Pagination } from "../Pagination/Pagination";

export const UserTable = () => {
  const { userData, userDispatch } = useUser();

  const { currentPageData, filteredData } = userData;

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full h-4/5">
        <div className="w-full h-full table border-collapse">
          <div className="table-header-group">
            <div className="table-row text-center font-semibold">
              <div className="table-cell w-8 border border-gray-400 py-2">
                <input type="checkbox" name="allData" id="allData" />
              </div>
              <div className="table-cell border border-gray-400">Name</div>
              <div className="table-cell border border-gray-400">Email</div>
              <div className="table-cell border border-gray-400">Role</div>
              <div className="table-cell border w-32 border-gray-400">
                Actions
              </div>
            </div>
          </div>
          <div className="table-row-group">
            {currentPageData.map((user) => (
              <UserDetails key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};
