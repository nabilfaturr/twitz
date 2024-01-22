import React from "react";
import { useSelector } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Logout from "../../components/Logout";

const UserTwits = () => {
  const [userTweets, setUserTweets] = React.useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser.id;

  const fetchData = async () => {
    let response = await fetch(`/api/user/tweets/${userId}`);
    response = await response.json();
    console.log(response);

    if (response) {
      setUserTweets(response);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleDateTweet = (date) => {
    return date.split("T")[0];
  };

  const handleDelete = async (twitId) => {
    let response = await fetch(`/api/user/tweet/${userId}/${twitId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      fetchData();
    }
  };

  const handleTimeTweet = (date) => {
    let trimDate = new Date(`${date}`);
    const gap = 7;

    trimDate.setHours(trimDate.getHours() + gap);

    return trimDate.toISOString().substr(11, 5);
  };

  return (
    <main className="w-full h-screen flex items-center">
      <section className="mx-auto w-full max-w-3xl flex justify-center flex-col space-y-5">
        <div className="flex justify-between">
          <BackButton path="/home" />
          <Logout/>
        </div>
        <h1 className="font-bold text-4xl">Your Twits</h1>
        {userTweets.length > 0 ? (
          <UserTweet
            userTweets={userTweets}
            handleDateTweet={handleDateTweet}
            handleTimeTweet={handleTimeTweet}
            currentUser={currentUser}
            handleDelete={handleDelete}
          />
        ) : (
          <h1 className="text-lg">No twit found, Go create one</h1>
        )}
      </section>{" "}
    </main>
  );
};

const UserTweet = ({
  userTweets,
  handleDateTweet,
  handleTimeTweet,
  currentUser,
  handleDelete,
}) => {
  return (
    userTweets &&
    userTweets.map((tweet, idx) => (
      <div
        key={idx}
        className="w-full bg-slate-100 space-y-4 border p-5 rounded-lg flex flex-col justify-between shadow-sm"
      >
        <div>
          <h1 className="font-bold">@{currentUser.username}</h1>
        </div>
        <div className="">
          <h1>{tweet.payload}</h1>
        </div>
        <div className="text-slate-700 text-sm flex justify-between self -end">
          <h1>{handleDateTweet(tweet.updatedAt)}</h1>
          <h1>{handleTimeTweet(tweet.updatedAt)}</h1>
        </div>
        <div className="space-x-3 self-end flex justify-center items-center">
          <button
            onClick={() => handleDelete(tweet.id)}
            className="w-10 h-10 flex justify-center items-center p-3 rounded-full text-white bg-red-600 hover:opacity-80"
          >
            <FaRegTrashCan className="w-5 h-5" />
          </button>
          <Link
            className="w-10 h-10 flex justify-center items-center p-3 rounded-full text-white bg-green-600 hover:opacity-80"
            to={`./${tweet.id}`}
          >
            <button>
              <MdModeEdit className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    ))
  );
};

export default UserTwits;
