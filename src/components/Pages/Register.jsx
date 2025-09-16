import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { notification } from "antd";

function Register() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const userName = e.target.elements.username.value; // Get the value of the input field
  
    const accountList = JSON.parse(localStorage.getItem('accountList')) || [];
  
    if (accountList.some(account => account.userName === userName)) {
      notification.error({
        message: 'Registration failed',
        description: 'This username is already taken.',
      });
      return;
    }
  
    const newAccount = { userName, password };
    accountList.push(newAccount);
    localStorage.setItem('accountList', JSON.stringify(accountList));
  
    notification.success({
      message: 'Registration successful',
      description: 'You have successfully registered.',
    });
    setUserNameError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setCheckboxError(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6 "
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
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
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white "
                  onChange={(e) => {
                    const userName = e.target.value;
                    setUserName(userName);
                    const isError =
                      userName.length > 0 &&
                      !(
                        /^[a-zA-Z0-9@]+$/.test(userName) ||
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                          userName
                        )
                      );
                    setUserNameError(isError);
                  }}
                />
                <span className="text-xs text-red-800 h-[20px]">
                  {userName.length > 0 &&
                  !(
                    /^[a-zA-Z0-9@]+$/.test(userName) ||
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      userName
                    )
                  )
                    ? "Invalid username or email address"
                    : ""}
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
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    const password = e.target.value;
                    setPassword(password);
                    const isError =
                      password.length > 0 &&
                      (password.length < 8 || password.length > 20);
                    setPasswordError(isError);
                  }}
                />
                <span className="text-xs text-red-800 h-[20px]">
                  {password.length > 0 &&
                  (password.length < 8 || password.length > 20)
                    ? "Password must be at least 8 characters and not more than 20 characters"
                    : ""}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    const confirmPassword = e.target.value;
                    setConfirmPassword(confirmPassword);
                    const isError =
                      confirmPassword.length > 0 &&
                      confirmPassword !== password;
                    setConfirmPasswordError(isError);
                  }}
                />
                <span className="text-xs text-red-800 h-[20px]">
                  {confirmPassword.length > 0 && confirmPassword !== password
                    ? "Password does not match"
                    : ""}
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  onChange={(e) => {
                    const checkbox = e.target.checked;
                    setCheckbox(checkbox);
                    setCheckboxError(!checkbox);
                  }}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light cursor-pointer">
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <span className="text-xs text-red-800 h-[20px]">
              {checkboxError ? "Please accept the terms and conditions" : ""}
            </span>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // onClick={(e) => {
                //   e.preventDefault();
                //   if (
                //     userName.length === 0 ||
                //     password.length === 0 ||
                //     confirmPassword.length === 0 ||
                //     !checkbox ||
                //     userNameError ||
                //     passwordError ||
                //     confirmPasswordError
                //   ) {
                //     setUserNameError(userName.length === 0);
                //     setPasswordError(password.length === 0);
                //     setConfirmPasswordError(confirmPassword.length === 0);
                //     setCheckboxError(!checkbox);
                //     return;
                //   }
                //   const accountInfo = {
                //     userName: userName,
                //     password: password,
                //   };
                //   localStorage.setItem(
                //     "accountInfo",
                //     JSON.stringify(accountInfo)
                //   );
                //   navigate("/signin");
                // }}
              >
                Create account
              </button>
            </div>

            <p className="text-sm font-light">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline text-[rgb(79,70,229)]"
                onClick={() => navigate("/signin")}
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
