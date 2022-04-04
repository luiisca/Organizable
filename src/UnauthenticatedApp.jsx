import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const UnauthenticatedApp = () => {
  const {register, handleSubmit, errors} = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [crrPage, setCrrPage] = useState('submit');

  return (
    <div>
      {crrPage == 'login' && (
        <LoginPage
          setCrrPage={setCrrPage}
          setIsLoading={setIsLoading}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />

      )}

      <SignupPage
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        setIsLoading={setIsLoading}
      />

      <a href="#" onClick={() => setCrrPage(crrPage == 'login' ? 'signup' : 'login')}>
        Signup
      </a>
    </div>
  );
};

export default UnauthenticatedApp;
