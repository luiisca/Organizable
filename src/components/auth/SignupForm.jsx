import {useState} from 'react';
import {useGlobalContext} from '../../context/GlobalProvider';
import {createUser} from '../../services/users-service';
import {useForm} from 'react-hook-form';
import Input from './Input';

const SignupForm = () => {
  const {handleSubmit, watch, register, formState: {errors}} = useForm(

  );
  const {signup} = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  const inputs = watch([
    'username',
    'first_name',
    'last_name',
    'email',
    'password',
  ],
    {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
  );

  const submitHandler = async (data) => {
    setIsLoading(true);
    signup(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Input
        name="username"
        placeholder="Username"
        register={register}
        errors={errors.username} />
      <Input
        name="email"
        placeholder="Email"
        register={register}
        errors={errors.email} />
      <Input
        name="first_name"
        placeholder="First Name"
        register={register}
        errors={errors.first_name} />
      <Input
        name="last_name"
        placeholder="Last Name"
        register={register}
        errors={errors.last_name} />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        register={register}
        validation={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long'
          }
        }}
        errors={errors.password} />
      {
        inputs.includes('') ?
          <button type="submit" disabled>Sign Up</button> :
          <button type="submit">Sign Up</button>
      }
    </form>
  );
};

export default SignupForm;
