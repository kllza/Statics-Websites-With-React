import PropTypes from 'prop-types'

const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block text-gray-700 font-bold mb-2">
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string
}

export default Label;
