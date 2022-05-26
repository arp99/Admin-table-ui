export const getPageData = (data, pageNumber) => {
  return data.slice((pageNumber - 1) * 10, pageNumber * 10);
};
