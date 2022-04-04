import {useAuth} from '../context/auth-context';
import {createUser} from '../services/users-service';

const SignupPage = ({ handleSubmit, register, errors, setIsLoading }) => {
  const { setUser } = useAuth();

  const submitHandler = async (data) => {
    setIsLoading(true);
    try {
      const user = await createUser(data);
      setUser(user);
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>
          Username
          <input {...register('username')} />
          <span>{errors}</span>
        </label>
        <label>
          Email
          <input {...register('email')} name="email" />
          <span>{errors}</span>
        </label>
        <label>
          First name
          <input {...register('first_name')} name="firstName" />
          <span>{errors}</span>
        </label>
        <label>
          Last name
          <input {...register('last_name')} name="lastName" />
          <span>{errors}</span>
        </label>
        <label>
          Password
          <input {...register('password', {required: true})} name="password" type="password" />
          <span>{errors}</span>
        </label>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
};

export default SignupPage;
