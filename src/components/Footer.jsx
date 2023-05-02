import PropTypes from "prop-types";

function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; {year} {props.author}
      </p>

      {/* add github icon and link */}
      <a
        href="
      https://github.com/Sushipie/kaomoji-pedia"
        target="_blank"
      >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </a>
    </footer>
  );
}

Footer.propTypes = {
  author: PropTypes.string,
};

export default Footer;
