import React from "react";
import { Header } from "../Header/Header";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { useUser } from "../../Context/userDataContext";
import { UserDetails } from "./UserDetails";
import { Pagination } from "../Pagination/Pagination";
import { actionConstants } from "../../Constants/actionConstants";
import { useFilterData } from "../../Context/filterContext";
import { Checkbox } from "../Checkbox/Checkbox";

export const UserTable = ({ headers }) => {
  const {
    userDispatch,
    userData: { selectCurrentPage, totalUserData },
  } = useUser();

  const { filteredData, currentPage, setCurrentPage, pageData } =
    useFilterData();

  const selectPageHandler = () => {
    userDispatch({
      type: selectCurrentPage
        ? actionConstants.deselectCurrentPage
        : actionConstants.selectCurrentPage,
      payload: { pageData },
    });
  };

  return (
    <div className="w-full h-full text-xs sm:text-base">
      <Header filteredData={filteredData} />
      {totalUserData.length > 0 && (
        <div className="w-full h-4/5 mt-4">
          <div className="w-full h-full ">
            <div className="text-center flex justify-between w-full font-bold py-2 border-0 border-b-2 border-lightGray dark:border-blueGray">
              <div className="w-8 relative">
                <Checkbox
                  id={"allData"}
                  name={"allData"}
                  selected={selectCurrentPage}
                  changeHandler={selectPageHandler}
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
              {pageData.length === 0 && (
                <h2 className="text-center text-lightText dark:text-white">
                  No records found
                </h2>
              )}
              {pageData.map((user) => (
                <UserDetails key={user.id} user={user} headers={headers} />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="w-max ml-auto flex gap-3">
        <ThemeToggler />
        {filteredData.length > 0 && (
          <Pagination
            filteredData={filteredData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};
