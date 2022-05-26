const filterBySearch = (userData, value) => {
  if (value.length === 0) {
    return userData;
  } else {
    const filteredData = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.role.toLowerCase().includes(value.toLowerCase())
    );

    return filteredData;
  }
};

export const getFilteredData = (userData, filterBy, value) => {
  switch (filterBy) {
    case "SEARCH":
      return filterBySearch(userData, value);
    default:
      return userData;
  }
};
