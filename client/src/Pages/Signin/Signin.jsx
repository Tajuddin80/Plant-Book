import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // ✅ eye icons
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";

const Signin = () => {
  const {
    handleEmailSignin,
    user,
    setUser,
    setPhoto,
    setUsername,
    setEmail,
  } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); 


    const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


    useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);
  const handleEmailSigninFunc = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginDetails = Object.fromEntries(formData.entries());

    handleEmailSignin(loginDetails.email, loginDetails.password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signin Successful",
            showConfirmButton: false,
            timer: 1500,
          });

          setSuccess("Signin successful");
          setError("");

          setUser(user);
          setUsername(user?.displayName);
          setPhoto(user?.photoURL);
          setEmail(user?.email);

          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Wrong Email or Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

 

  return (
    <div className="mx-auto max-w-md p-4 my-10 rounded-md shadow sm:p-8 bg-base-200 text-base-content">
      <Helmet>
        <title>Plant Book 🌱 Sign In</title>
      </Helmet>

      <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>

      <div className="my-6 space-y-4">
     <GoogleSignIn setError={setError} setSuccess={setSuccess} ></GoogleSignIn>
      </div>

      <div className="flex items-center w-full my-4">
        <hr className="w-full border-base-content/20" />
        <p className="px-3 text-base-content/70">OR</p>
        <hr className="w-full border-base-content/20" />
      </div>

      <form onSubmit={handleEmailSigninFunc} className="space-y-8">
        <div className="space-y-4">
          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="w-full px-3 py-2 border rounded-md border-base-content/20 bg-base-100 text-base-content"
            />
          </div>

          {/* Password with toggle */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                href="#"
                className="text-xs hover:underline text-base-content/70"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // ✅ dynamic type
                name="password"
                id="password"
                required
                placeholder="password"
                className="w-full px-3 py-2 pr-10 border rounded-md border-base-content/20 bg-base-100 text-base-content"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2/4 right-3 -translate-y-2/4 text-base-content/70"
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error ? (
              <p className="text-sm text-red-600 font-medium mt-1">{error}</p>
            ) : (
              <p className="text-sm text-green-300 font-medium mt-1">
                {success}
              </p>
            )}
          </div>
        </div>

        {/* Link to Signup */}
        <p className="text-sm text-center text-base-content/70">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            state={{ from: location.state?.from }}
            className="link link-hover text-primary"
          >
            Sign up here
          </Link>
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold btn cursor-pointer rounded-md bg-primary text-primary-content"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;
