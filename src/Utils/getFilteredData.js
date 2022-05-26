import { getPageData } from "./getPageData";

const filterBySearch = (state, value) => {
  // if the search is empty, data comes back to original form
  if (value.length === 0) {
    return {
      ...state,
      filteredData: state.totalUserData,
      currentPageData: getPageData(state.totalUserData, 1),
      currentPage: 1,
    };
  } else {
    const filteredData = state.totalUserData.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.role.toLowerCase().includes(value.toLowerCase())
    );

    return {
      ...state,
      filteredData,
      currentPageData: getPageData(filteredData, 1),
      currentPage: 1,
    };
  }
};

export const getFilteredData = (state, filterBy, value) => {
  switch (filterBy) {
    case "SEARCH":
      return filterBySearch(state, value);
    default:
      return state;
  }
};
