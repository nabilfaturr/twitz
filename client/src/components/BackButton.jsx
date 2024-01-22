import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BackButton = ({ path }) => {

  return (
    <div className="flex">
      <Link
      to={path}
        className="w-auto flex flex-row-reverse justify-end gap-1 hover:border-black border-b border-white pb-1 items-center"
      >
        <span>Back</span>
        <IoChevronBackCircleOutline className="w-9 h-9" />
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  path: PropTypes.string.isRequired, // Tambahkan baris ini
};

export default BackButton;
