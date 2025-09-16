import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { notification } from 'antd';
import LoadingPage from './LoadingPage';

export default function SignIn() {
  
      
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
  
    if (accountInfo && accountInfo.userName === userName && accountInfo.password === password) {
      notification.success({
        message: 'Login successful',
        description: 'You have successfully logged in.',
      });
      setLoginError(false);
  
      // Start loading effect
      setLoading(true);
      navigate('/loading');
      
      setTimeout(() => {
        setLoading(false); // End loading effect
        navigate('/'); // Navigate to home page
      }, 2000); // Wait for 2 seconds before navigating
    } else {
      notification.error({
        message: 'Login failed',
        description: 'Invalid username or password.',
      });
      setLoginError(true);
    }
  };
  

  return (
    loading ? <LoadingPage /> :
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Username or Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="username"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    const userName = e.target.value;
                    setUserName(userName);
                  }}
                />
                <span className='text-xs text-red-800'>
                  {userName.length > 0 && !(/^[a-zA-Z0-9@]+$/.test(userName) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userName)) ? "Invalid username or email address" : ""}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    const password = e.target.value;
                    setPassword(password);
                  }}
                />
                <span className='text-xs text-red-800'>
                  {password.length > 0 && (password.length < 8 || password.length > 20) ? "Password must be at least 8 characters and not more than 20 characters" : ""}                
                </span>
              </div>
            </div>
            
            {loginError === true && <div className="text-sm italic text-red-500 ">Wrong username or password, please enter correct information!</div>}            
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-sm text-center text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              onClick={() => navigate("/register")}
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}