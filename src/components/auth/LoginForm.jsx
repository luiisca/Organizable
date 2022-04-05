import {useState} from 'react';
import {useGlobalContext} from '../../context/GlobalProvider';
import {useForm} from 'react-hook-form';
import Input from './Input';

const LoginForm = () => {
  const {handleSubmit, watch, register, formState: {errors}} = useForm();
  const userName = watch('username', '');
  const password = watch('password', '');
  const {login} = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    login(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <fieldset>
        <Input
          name="username"
          // type="email"
          placeholder="User Name"
          register={register}
          validation={{
            required: 'Email is required',
            // pattern: {
            //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            //   message: 'Invalid email address',
            // },
          }}
          errors={errors.email} />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          validation={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          errors={errors.password} />
      </fieldset>
      {
        userName.trim() == '' || password.trim() == '' ?
          <button type="submit" disabled>Login</button> :
          <button type="submit">Login</button>
      }
    </form>
  );
};

export default LoginForm;
