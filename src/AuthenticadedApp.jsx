import React, { useState, useEffect } from 'react';
import {useAuth} from './context/auth-context';

const AuthenticatedApp = () => {
  const {user} = useAuth();
  return (
    <div>
      <p>
        {console.log(user)}
      </p>
    </div>
  );
};

export default AuthenticatedApp;
