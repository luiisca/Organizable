import {useAuth} from '../context/auth-context';

const LoginPage = ({handleSubmit, register, errors, setIsLoading}) => {
  const {login} = useAuth();

  const submitHandler = (data) => {
    setIsLoading(true);
    login(data);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>
          Email
          <input {...register('username', {required: true})} name="email" />
          <span>{errors}</span>
        </label>
        <label>
          Password
          <input {...register('password', {required: true})} name="password" type="password" />
          <span>{errors}</span>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
