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
    default:
      return { ...state };
  }
};
