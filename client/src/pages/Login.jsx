import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setCurrentUser, setRole } from "./../redux/user/userSlice.js";
import BackButton from "../components/BackButton.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = React.useState({});
  const [error, setError] = React.useState("");
  const { currentUser, role } = useSelector((state) => state.user);
  console.log({ currentUser, role });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return setError("Invalid!");
    }

    response = await response.json();

    console.log(response);

    if (response) {
      const role = response["role"];
      const currentUser = response["user"];
      dispatch(setRole(role));
      dispatch(setCurrentUser(currentUser));
      navigate("/home");
    }
  };

  return (
    <main className="w-full h-screen flex items-center">
      <section className="mx-auto space-x-20 border border-black/20 p-10 rounded-lg shadow-md">
        <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="font-bold">Sign In</h1>

          <input
            id="username"
            onChange={handleChange}
            type="text"
            className="border border-black/20 h-14 w-96 px-4 py-2 rounded-md"
            placeholder="username"
          />
          <input
            id="password"
            onChange={handleChange}
            type="password"
            className="border border-black/20 h-14 w-96 px-4 py-2 rounded-md"
            placeholder="password"
          />

          <button
            type="submit"
            className="w-full mt-2 text-white bg-black px-4 py-2 rounded-lg border border-black self-start font-bold hover:opacity-90"
          >
            Sign In
          </button>

          <p className="text-slate-700 mt-3">
            Dont have an account?{" "}
            <Link to={'/sign-up'} className="text-black hover:border-b border-black">
              <span>Sign Up</span>
            </Link>
          </p>

          {error && <p className="text-red-600 font-medium">{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default Login;
