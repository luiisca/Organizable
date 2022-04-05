import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {userKey} from "../config";
import {login, logout} from '../services/session-service';
import {getUser} from "../services/users-service";
import globalReducer from "./global-reducer";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [globalState, dispatch] = useReducer(globalReducer, {
    user: null,
    login: () => {},
    logout: () => {},
    board: null,
    setBoard: () => {},
  });

  useEffect(() => {
    // we wanna make sure that the user has a valid token
    const user = JSON.parse(localStorage.getItem(userKey));

    if (user) {
      getUser().
        then(() => {
          dispatch({type: 'LOGIN', user})
        }).
        catch(() => dispatch({type: 'LOGOUT'}));
    }
  }, []);

  const loginHandler = (credentials) => {
    login(credentials)
      .then(user => {
        console.log(user, 'loginhandler');
        dispatch({type: 'LOGIN', user});
        localStorage.setItem(userKey, JSON.stringify(user));
      })
      .catch(error => console.log(error));
  };

  const logoutHandler = () => {
    logout()
      .then(() => dispatch({type: 'LOGOUT'}))
      .catch(error => console.log(error));
  };

  const setBoardHandler = (board) => {
    dispatch({type: 'SET_BOARD', board});
  };

  return (
    <GlobalContext.Provider
      value={{
        user: globalState.user,
        login: loginHandler,
        logout: logoutHandler,
        board: globalState.board,
        setBoard: setBoardHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  return useContext(GlobalContext);
};
export {GlobalProvider, useGlobalContext};
