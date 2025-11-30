import React, { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/Authcontext";

const CreateAccount = () => {
  const {
    createUser,
    updateUserProfile,
    user,
    setUser,
    signInUserWithGoogle,
    signInUserWithGithub,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const [matchPassword, setHandlePassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const name = e.target.name.value;

    if (password !== confirmPassword) {
      setHandlePassword(false);
    } else {
      createUser(email, password)
        .then(() => {
          updateUserProfile({ displayName: name })
            .then(() => {
              setUser({ ...user, displayName: name });

              navigate(from, { replace: true });
            })
            .catch(() => {
              setUser(user);
            });
        })
        .catch(() => {});
    }
  };

  const handleGoogleLogin = () => {
    signInUserWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  const handleGithubLogin = () => {
    signInUserWithGithub()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-10 px-4">
      {/* Card */}
      <div className="w-full max-w-md border border-gray-300 rounded-md p-8 shadow-sm bg-white">
        <h2 className="text-2xl font-semibold mb-6">Create an account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b border-gray-300 py-2 mb-5 focus:outline-none"
            name="name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder=" Email"
            className="w-full border-b border-gray-300 py-2 mb-5 focus:outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full border-b border-gray-300 py-2 mb-5 focus:outline-none"
            onChange={() => setHandlePassword(true)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="w-full border-b border-gray-300 py-2 mb-6 focus:outline-none"
            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$"
            onChange={() => setHandlePassword(true)}
          />
          {matchPassword ? (
            <button
              type="submit"
              disabled={false} // Password match হলে enabled
              className="w-full bg-orange-400 text-white py-3 rounded-sm hover:bg-orange-500 transition"
            >
              Create an account
            </button>
          ) : (
            <div>
              <p className="text-red-600 font-semibold">
                Check Your Password again
              </p>
              <button
                type="submit"
                disabled={true} // Password mismatch হলে disabled
                className="w-full bg-gray-300 text-white py-3 rounded-sm cursor-not-allowed transition"
              >
                Create an account
              </button>
            </div>
          )}

          {/* Create Button */}
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center w-full max-w-md my-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="px-3 text-gray-500 text-sm">Or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Google Button */}
      <button
        className="w-full max-w-md flex items-center justify-center gap-3 border hover:bg-orange-500 hover:duration-500 border-gray-300 rounded-full py-3 bg-white"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
      {/* github Button */}
      <button
        className="w-full max-w-md flex items-center justify-center gap-3 border hover:bg-orange-500 hover:duration-500 border-gray-300 rounded-full py-3 mb-3 bg-white mt-5"
        onClick={handleGithubLogin}
      >
        <FaGithub className="text-blue-600 text-xl" />
        Continue with Github
      </button>
    </div>
  );
};

export default CreateAccount;
