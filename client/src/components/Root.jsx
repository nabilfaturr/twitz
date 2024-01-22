import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex gap-4">
      <Link to={'/sign-in'}>
        <button className="px-4 py-2 border rounded-lg">Sign In</button>
      </Link>
      <Link to={'/sign-up'}>
        <button className="px-4 py-2 border rounded-lg">Sign Up</button>
      </Link>
    </div>
  );
};

export default Root;
