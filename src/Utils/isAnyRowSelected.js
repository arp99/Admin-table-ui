export const isAnyRowSelected = (data) => {
  return data.reduce((acc, curr) => acc || curr.selected, false);
};
