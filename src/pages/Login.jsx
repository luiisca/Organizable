import SignupForm from "../components/auth/SignupForm";
import LoginForm from "../components/auth/LoginForm";

const Login = ({login}) => {
  return (
    <div>
      {login ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default Login;
