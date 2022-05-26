export const getCurrentPage = (pageValue, totalPages, currentPage) => {
  if (pageValue === "lastpage") {
    return totalPages;
  } else if (pageValue === "firstpage") {
    return 1;
  } else if (pageValue === "next") {
    return currentPage + 1;
  } else if (pageValue === "back") {
    return currentPage - 1;
  } else {
    return Number(pageValue);
  }
};
