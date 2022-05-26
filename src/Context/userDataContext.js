import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, userReducer } from "../Reducers/userReducer";
import { getUserDataService } from "../Services/getUserDataService";
import { actionConstants } from "../Constants/actionConstants";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, userDispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    (async function () {
      try {
        const response = await getUserDataService();
        userDispatch({
          type: actionConstants.loadData,
          payload: response.data,
        });
      } catch (err) {
        userDispatch({
          type: actionConstants.loadDataError,
          payload: err.message,
        });
      }
    })();
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, userDispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUser = () => useContext(UserDataContext);
