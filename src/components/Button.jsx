import PropTypes from "prop-types";

function Button(props) {
  return (
    <button className="button-50" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
