import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    let response = await fetch("/api/auth/signout", {
      method: "DELETE",
    });

    if (response.ok) {
      navigate("/sign-in");
    }
  };

  return (
    <div className="flex text-white">
      <button
        onClick={handleLogOut}
        className="flex flex-row-reverse px-4 py-2 rounded-lg bg-red-600 justify-center items-center"
      >
        <span>Log Out</span>
      </button>
    </div>
  );
};

Logout.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Logout;
