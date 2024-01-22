import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Daftar = () => {
  const [form, setForm] = React.useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("berhasil");

    if (response.ok) {
      navigate("/sign-in");
    }
  };

  console.log(form);

  return (
    <main className="w-full h-screen flex items-center">
      <section className="mx-auto space-x-20 border border-black/20 p-10 rounded-lg shadow-md">
        <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="font-bold">Sign Up</h1>
          <input
            id="nama"
            onChange={handleChange}
            type="text"
            className="border border-black/20 h-14 w-96 px-4 py-2 rounded-md"
            placeholder="name"
          />
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
            Sign Up
          </button>

          <p className="text-slate-700 mt-3">
            Already have an account?{" "}
            <Link
              to={"/sign-in"}
              className="text-black hover:border-b border-black"
            >
              <span>Sign In</span>
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Daftar;
