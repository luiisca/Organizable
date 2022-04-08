import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import {userKey} from "../config";
import {getBoards} from "../services/boards-service";
import {login, logout} from '../services/session-service';
import {createUser, getUser} from "../services/users-service";
import globalReducer from "./global-reducer";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [globalState, dispatch] = useReducer(globalReducer, {
    user: null,
    login: () => {},
    logout: () => {},
    boards: [],
    setBoard: () => {},
  });
  const navigate = useNavigate();

  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    // we wanna make sure that the user has a valid token
    const user = JSON.parse(localStorage.getItem(userKey));

    const fetchUser = async () => {
      if (user) {
        try {
          await getUser();
          dispatch({type: 'LOGIN', user});
          console.log(globalState.user, 'if inside fethUser inside useEffect')
          const boards = await getBoards();
          dispatch({type: 'SET_BOARDS', boards});

          navigate('/boards');
          setIsFetched(true);
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchUser().catch(console.log);
    console.log(globalState.user, 'after if statement inside useEffect');
  }, []);

  const loginHandler = (credentials) => {
    login(credentials)
      .then(user => {
        dispatch({type: 'LOGIN', user})
        navigate('/boards');
      })
      .catch(error => console.log(error));
  };

  const signupHandler = (credentials) => {
    createUser(credentials)
      .then(user => {
        dispatch({type: 'LOGIN', user})
        navigate('boards');
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
      {/* I feel like it could even render a loading screen here */}
      {isFetched ? children : null}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  return useContext(GlobalContext);
};
export {GlobalProvider, useGlobalContext};
