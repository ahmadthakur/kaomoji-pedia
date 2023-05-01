import PropTypes from "prop-types";

function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; {year} {props.author}
      </p>
    </footer>
  );
}

Footer.propTypes = {
  author: PropTypes.string,
};

export default Footer;
