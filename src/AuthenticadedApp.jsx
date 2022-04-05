import React, {useState, useEffect} from 'react';
import {useGlobalContext} from './context/GlobalProvider';

const AuthenticatedApp = () => {
  const {user} = useGlobalContext();
  return (
    <div>
      <p>
       AuthenticatedApp
      </p>
    </div>
  );
};

export default AuthenticatedApp;
