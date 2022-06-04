import { actionConstants } from "../Constants/actionConstants";

export const initialState = {
  totalUserData: [],
  userDataFetchStatus: "idle",
  userDataFetchError: null,
  selectCurrentPage: false,
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
        userDataFetchStatus: "fulfilled",
      };
    case actionConstants.loadDataError:
      return {
        ...state,
        userDataFetchStatus: "error",
        userDataFetchError: "error",
      };
    case actionConstants.deleteUser:
      return {
        ...state,
        totalUserData: state.totalUserData.filter(
          (user) => user.id !== payload.userId
        ),
      };

    case actionConstants.selectUser:
      return {
        ...state,
        totalUserData: state.totalUserData.map((user) => {
          if (user.id === payload.userId) {
            return {
              ...user,
              selected: !user.selected,
            };
          } else {
            return user;
          }
        }),
      };

    case actionConstants.deleteSelected:
      return {
        ...state,
        totalUserData: state.totalUserData.filter((user) => !user.selected),
        selectCurrentPage: false,
      };

    case actionConstants.selectCurrentPage:
      const idsToSelect = payload.pageData.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: true }),
        {}
      );

      return {
        ...state,
        totalUserData: state.totalUserData.map((user) => {
          if (idsToSelect[user.id]) {
            return {
              ...user,
              selected: true, // toggling
            };
          } else {
            return user;
          }
        }),
        selectCurrentPage: !state.selectCurrentPage,
      };

      case actionConstants.deselectCurrentPage : 
        const idsToSelect1 = payload.pageData.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: true }),
        {}
      );
      return {
        ...state,
        totalUserData: state.totalUserData.map((user) => {
          if (idsToSelect1[user.id]) {
            return {
              ...user,
              selected: false, // toggling
            };
          } else {
            return user;
          }
        }),
        selectCurrentPage: !state.selectCurrentPage,
      };

    case actionConstants.editUser:
      const { name, email, role, id } = payload;

      return {
        ...state,
        totalUserData: state.totalUserData.map((user) => {
          if (user.id === id) {
            return {
              ...user,
              name,
              email,
              role,
            };
          } else {
            return user;
          }
        }),
      };
    default:
      return { ...state };
  }
};
