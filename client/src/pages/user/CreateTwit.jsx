import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BackButton from "../../components/BackButton";

const CreateTwit = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const userId = currentUser.id;
  const [form, setForm] = useState({ userId });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(`/api/user/tweet/${userId}`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      navigate("/home");
    }
  };

  return (
    <main className="w-full h-screen flex items-center">
      <section className="mx-auto w-full max-w-3xl flex justify-center flex-col space-y-5">
        <BackButton path="/home"/>
        <h1 className="font-bold text-2xl">Create Twit</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-40">
          <textarea
            onChange={handleChange}
            id="payload"
            className="border rounded-lg p-3"
            name="message"
            rows="10"
            cols="30"
          ></textarea>
          <button
            type="submit"
            className="border px-4 py-2 rounded-lg bg-green-600 hover:opacity-80 text-white font-bold"
          >
            Create
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreateTwit;
