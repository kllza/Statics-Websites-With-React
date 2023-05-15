import PropTypes from "prop-types";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`rounded px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
