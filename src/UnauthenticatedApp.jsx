import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Route, Routes, useNavigate} from 'react-router-dom';
import SignupForm from './components/auth/SignupForm';
import Error404 from './pages/Error404';
import Login from './pages/Login';

const UnauthenticatedApp = () => {
  const {register, handleSubmit, errors} = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [crrPage, setCrrPage] = useState('submit');
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route index element={<Login login={true}
        />} />
        <Route path="signup" element={<Login
        />} />
      </Routes>

      {/* TODO: Add a loading screen AND add separated login and signup buttons} */}
      <button onClick={() => {
        setCrrPage(crrPage == 'login' ? 'signup' : 'login')
        navigate(crrPage == 'login' ? '/signup' : '/')
      }}>
        {crrPage == 'login' ? 'Signup' : 'Login'}
      </button>
    </div>
  );
};

export default UnauthenticatedApp;
