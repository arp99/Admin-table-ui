import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, userReducer } from "../Reducers/userReducer";
import { getUserDataService } from "../Services/getUserDataService";
import { actionConstants } from "../Constants/actionConstants";
import { useSearch } from "./searchContext";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, userDispatch] = useReducer(userReducer, initialState);

  const { searchData } = useSearch();
  console.log({ searchData });

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

  useEffect(() => {
    console.log("Get filtered data");
  }, [searchData]);

  return (
    <UserDataContext.Provider value={{ userData, userDispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUser = () => useContext(UserDataContext);
