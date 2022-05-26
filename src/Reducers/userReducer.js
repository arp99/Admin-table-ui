import { actionConstants } from "../Constants/actionConstants";

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
        currentPageData: modifiedData.slice(0, 10),
        userDataFetchStatus: "fulfilled",
      };
    case actionConstants.loadDataError:
      return {
        ...state,
        userDataFetchStatus: "error",
        userDataFetchError: "error",
      };
    default:
      return { ...state };
  }
};
