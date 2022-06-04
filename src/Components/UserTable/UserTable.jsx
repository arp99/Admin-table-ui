import React from "react";
import { Header } from "../Header/Header";
import { useUser } from "../../Context/userDataContext";
import { UserDetails } from "./UserDetails";
import { Pagination } from "../Pagination/Pagination";
import { actionConstants } from "../../Constants/actionConstants";
import { useFilterData } from "../../Context/filterContext";

export const UserTable = ({ headers }) => {
  const {
    userDispatch,
    userData: { selectCurrentPage, totalUserData },
  } = useUser();

  const { filteredData, currentPage, setCurrentPage } = useFilterData();
  const { pageData } = useFilterData();

  return (
    <div className="w-full h-full text-base">
      <Header />
      {totalUserData.length > 0 && (
        <div className="w-full h-4/5 mt-4">
          <div className="w-full h-full ">
            <div className="text-center flex justify-between w-full font-bold py-2 border-0 border-b-2 border-lightGray">
              <div className="w-8">
                <input
                  type="checkbox"
                  name="allData"
                  id="allData"
                  className="w-5 h-4 accent-lightblue"
                  checked={selectCurrentPage}
                  onChange={() =>
                    userDispatch({
                      type: selectCurrentPage
                        ? actionConstants.deselectCurrentPage
                        : actionConstants.selectCurrentPage,
                      payload: { pageData },
                    })
                  }
                />
              </div>
              {headers.map((header, index) => (
                <div className="w-1/4" key={header + index + Math.random()}>
                  {header.title[0].toUpperCase() + header.title.slice(1)}
                </div>
              ))}
              <div className=" w-1/5">Actions</div>
            </div>

            <div className="w-full h-full flex flex-col">
              {pageData.map((user) => (
                <UserDetails key={user.id} user={user} headers={headers} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Pagination
        filteredData={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
