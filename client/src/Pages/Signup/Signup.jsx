import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";

const Signup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { handleEmailSignup,user, setUser, setEmail, setUsername, setPhoto } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleEmailSignupFunc = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, photourl, email, password } = Object.fromEntries(
      formData.entries()
    );

    const isValidLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

    if (!isValidLength || !hasUpperCase || !hasLowerCase || !hasSpecialChar) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, and a special character."
      );
      return;
    }

    setError("");

    try {
      const result = await handleEmailSignup(email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photourl,
      });

      const userInfo = { name, photo: photourl, email };

      fetch("https://plant-book-server.vercel.app/adduser", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Signup Successful!",
              showConfirmButton: false,
              timer: 2000,
            });
            setUser(user);
            setUsername(user?.displayName);
            setEmail(user?.email);
            setPhoto(user?.photoURL);
            navigate(from, { replace: true });
          } else {
            throw new Error("Failed to save user data");
          }
        });
    } catch (err) {
      // console.error("Signup error:", err.message);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Signup Failed",
        text: err.message,
        showConfirmButton: true,
      });
      setError(err.message);
    }
  };
   useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="mx-auto max-w-md p-4 my-10 rounded-md shadow sm:p-8 bg-base-200 text-base-content">
      <Helmet>
        <title>Plant Book 🌱 Register</title>
      </Helmet>
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Register your account
      </h2>

      <div className="my-6 space-y-4">
        <GoogleSignIn
          setError={setError}
          setSuccess={setSuccess}
        ></GoogleSignIn>
      </div>

      <div className="flex items-center w-full my-4">
        <hr className="w-full border-base-300" />
        <p className="px-3 text-base-content/70">OR</p>
        <hr className="w-full border-base-300" />
      </div>

      <form onSubmit={handleEmailSignupFunc} className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm text-base-content">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g., Taj Uddin"
              className="w-full px-3 py-2 border rounded-md border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="photourl"
              className="block text-sm text-base-content"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photourl"
              id="photourl"
              required
              placeholder="https://example.com/photo.jpg"
              className="w-full px-3 py-2 border rounded-md border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-base-content">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="your@email.com"
              className="w-full px-3 py-2 border rounded-md border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm text-base-content"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md border-base-300 bg-base-100 text-base-content"
            />
          </div>
        </div>

        <div className="text-red-500 text-sm text-center">{error}</div>
        <div className="text-green-500 text-sm text-center">{success}</div>

        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-neutral text-neutral-content"
        >
          Register
        </button>

        <p className="text-sm text-center text-base-content/70">
          Already have an account?{" "}
          <Link
            to="/signin"
            state={{ from: location.state?.from }}
            className="text-primary font-medium"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
