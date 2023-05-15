import PropTypes from "prop-types";
import Button from "../../Atoms/Button/Button";

const Header = ({ title, buttonText, buttonOnClick }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 py-4 px-6">
      <h1 className="text-lg font-bold">{title}</h1>
      <Button onClick={buttonOnClick} className="ml-2">
        {buttonText}
      </Button>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
};

export default Header;
