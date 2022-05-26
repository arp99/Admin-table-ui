import { actionConstants } from "../Constants/actionConstants";
import { getFilteredData } from "../Utils/getFilteredData";
import { getPageData } from "../Utils/getPageData";

export const initialState = {
  totalUserData: [],
  currentPageData: [],
  filteredData: [],
  userDataFetchStatus: "idle",
  userDataFetchError: null,
  currentPage: 1,
};

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionConstants.loadData:
      const modifiedData = payload.map((user) => ({
        ...user,
        selected: false,
      }));
      return {
        ...state,
        totalUserData: modifiedData,
        filteredData: modifiedData,
        currentPageData: getPageData(modifiedData, state.currentPage),
        userDataFetchStatus: "fulfilled",
      };
    case actionConstants.loadDataError:
      return {
        ...state,
        userDataFetchStatus: "error",
        userDataFetchError: "error",
      };
    case actionConstants.filterData:
      const { filterBy, value } = payload;
      const filteredData = getFilteredData(state, filterBy, value);
      return {
        ...filteredData,
      };
    case actionConstants.changePage:
      const { pageValue } = payload;
      let currentPage = state.currentPage;
      if (pageValue === "lastpage") {
        currentPage = Math.ceil(state.filteredData.length / 10);
      } else if (pageValue === "firstpage") {
        currentPage = 1;
      } else if (pageValue === "next") {
        currentPage += 1;
      } else if (pageValue === "back") {
        currentPage -= 1;
      } else {
        currentPage = Number(pageValue);
      }

      return {
        ...state,
        currentPage,
        currentPageData: getPageData(state.filteredData, currentPage),
      };
    case actionConstants.deleteUser:
      const { userId } = payload;
      const updatedTotalUserData = state.totalUserData.filter(
        (user) => user.id !== userId
      );
      const updatedFilteredData = state.filteredData.filter(
        (user) => user.id !== userId
      );

      const updatedPageData = getPageData(
        updatedFilteredData,
        state.currentPage
      );

      let newCurrentPage =
        updatedPageData.length === 0
          ? state.currentPage - 1
          : state.currentPage;
      return {
        ...state,
        totalUserData: updatedTotalUserData,
        filteredData: updatedFilteredData,
        currentPageData:
          updatedPageData.length === 0
            ? getPageData(updatedFilteredData, newCurrentPage)
            : updatedPageData,
        currentPage : newCurrentPage
      };
    default:
      return { ...state };
  }
};
