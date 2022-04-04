import {createContext, useContext, useState, useEffect} from 'react';
import {login, logout} from '../services/session-service';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const loginHandler = (credentials) => {
    login(credentials)
      .then(user => setUser(user))
      .catch(error => console.log(error));
  };

  const logoutHandler = () => {
    logout()
      .then(() => setUser({}))
      .catch(error => console.log(error));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
};

export {AuthProvider, useAuth};
