import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const [publicTweets, setPublicTweets] = React.useState([]);
  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser);

  const fetchData = async () => {
    let response = await fetch("/api/user/tweets");
    response = await response.json();
    console.log(response);

    if (response) {
      setPublicTweets(response);
    }
  };

  const handleDateTweet = (date) => {
    return date.split("T")[0];
  };

  const handleTimeTweet = (date) => {
    let trimDate = new Date(`${date}`);
    const gap = 7;

    trimDate.setHours(trimDate.getHours() + gap);

    return trimDate.toISOString().substr(11, 5);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="w-full h-auto flex items-center py-20">
      <section className="mx-auto w-full max-w-3xl flex justify-center flex-col space-y-7">
    
        <h1 className="text-5xl font-bold">Public Twit</h1>
        <div className="grid grid-cols-3 font-bold gap-2 text-center text-white">
          <Link
            to={"./create"}
            className="col-span-2 border px-4 py-2 rounded-lg bg-green-600 hover:opacity-80"
          >
            <button>Create Twit</button>
          </Link>
          <Link
            to={`./${currentUser.username}`}
            className=" border px-4 py-2 rounded-lg bg-black hover:opacity-80"
          >
            <button>@{currentUser.username}</button>
          </Link>
        </div>
        <div className="w-full flex flex-col gap-5 m-auto">
          {publicTweets && publicTweets.length > 0 ? (
            <PublicTweet
              publicTweets={publicTweets}
              handleDateTweet={handleDateTweet}
              handleTimeTweet={handleTimeTweet}
            />
          ) : (
            <div className="flex items-center justify-center">
              <h1 className="text-4xl font-bold mt-40 px-6 py-3 border rounded-lg shadow-md">
                No twit found :(
              </h1>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const PublicTweet = ({ publicTweets, handleDateTweet, handleTimeTweet }) => {
  return (
    publicTweets &&
    publicTweets.map((tweet, idx) => (
      <div
        key={idx}
        className="w-full bg-slate-100 space-y-4 border p-5 rounded-lg flex flex-col justify-between shadow-sm"
      >
        <div>
          <h1 className="font-bold">@{tweet.user.username}</h1>
        </div>
        <div className="">
          <h1>{tweet.payload}</h1>
        </div>
        <div className="text-slate-700 text-sm flex justify-between self -end">
          <h1>{handleDateTweet(tweet.updatedAt)}</h1>
          <h1>{handleTimeTweet(tweet.updatedAt)}</h1>
        </div>
      </div>
    ))
  );
};

export default Home;
