import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import BackButton from "../../components/BackButton";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = React.useState();

  const fetchData = async () => {
    let response = await fetch("/api/admin");
    response = await response.json();

    if (response) {
      setUsers(response);
    }
  };

  const handleDelete = async (id) => {
    let response = await fetch(`/api/admin/${id}`, {
      method: "DELETE",
    });
    response = await response.json();

    if (response) {
      fetchData();
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className="w-full h-screen flex items-center">
        <section className="mx-auto w-full  max-w-xl">
          <BackButton path="/sign-in"/>
          {users ? (
            <>
              <p className="my-5"><span className="font-bold underline">Admin</span> : {currentUser.username}</p>
              <Table users={users} handleDelete={handleDelete} />
            </>
          ) : (
            <h1>Belum ada</h1>
          )}
        </section>
      </main>
    </>
  );
};

const Table = ({ users, handleDelete }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border">
          <td className="px-8 py-4">Nama</td>
          <td className="px-8 py-4">Username</td>
          <td className="px-8 py-4">Action</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr key={idx} className="border">
            <td className="px-8 py-4">
              <h1>{user.nama}</h1>
            </td>
            <td className="px-8 py-4">
              <h1>{user.username}</h1>
            </td>
            <td className="px-8 py-4">
              <button
                onClick={() => {
                  handleDelete(user.id);
                }}
                className="px-4 py-2 rounded-lg text-white bg-red-600 hover:opacity-90"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Home;
