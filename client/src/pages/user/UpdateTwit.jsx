// update twit

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import BackButton from "../../components/BackButton";

const UpdateTwit = () => {
  const { currentUser } = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();
  const userId = currentUser.id;
  const [form, setForm] = useState({ userId });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
  };

  const fetchData = async () => {
    let response = await fetch(
      `/api/user/tweet/${currentUser.id}/${params.tweetId}`
    );

    response = await response.json();

    if (response) {
      const { payload } = response[0];
      setForm({ ...form, payload });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(`/api/user/tweet/${userId}/${params.tweetId}`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      navigate(`/home/${currentUser.id}`);
    }
  };

  return (
    <main className="w-full h-screen flex items-center">
      <section className="mx-auto w-full max-w-3xl flex justify-center flex-col space-y-5">
        <BackButton path={`/home/${currentUser.username}`} />

        <h1 className="font-bold text-2xl">Update Twit</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-40">
          <textarea
            value={form.payload}
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
            Update
          </button>
        </form>
      </section>
    </main>
  );
};

export default UpdateTwit;
