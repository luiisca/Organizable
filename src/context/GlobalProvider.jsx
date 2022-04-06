import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import {userKey} from "../config";
import {login, logout} from '../services/session-service';
import {createUser, getUser} from "../services/users-service";
import globalReducer from "./global-reducer";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [globalState, dispatch] = useReducer(globalReducer, {
    user: null,
    login: () => {},
    logout: () => {},
    boards: null,
    setBoard: () => {},
  });
  const navigate = useNavigate();

  useEffect(() => {
    // we wanna make sure that the user has a valid token
    const user = JSON.parse(localStorage.getItem(userKey));

    if (user) {
      getUser()
        .then(() => {
          dispatch({type: 'LOGIN', user})
        })
        .catch(error => console.log(error));
    }
  }, []);

  const loginHandler = (credentials) => {
    login(credentials)
      .then(user => {
        dispatch({type: 'LOGIN', user})
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  const signupHandler = (credentials) => {
    createUser(credentials)
      .then(user => {
        dispatch({type: 'LOGIN', user})
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  const logoutHandler = () => {
    logout()
      .then(() => {
        dispatch({type: 'LOGOUT'});
        navigate('/');
      })
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
        signup: signupHandler,
        logout: logoutHandler,
        boards: globalState.boards,
        setBoards: setBoardHandler,
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
