import PropTypes from "prop-types";
import { useState } from "react";

function KaomojiCard(props) {
  const [copied, setCopied] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");

  function handleCopy() {
    navigator.clipboard.writeText(props.kaomoji);
    setCopied(true);
    setBackgroundColor("#AED6F1");
    setTimeout(() => {
      setCopied(false);
      setBackgroundColor("");
    }, 500);
  }

  return (
    <div
      className="card"
      onClick={handleCopy}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="card-body">
        <h5 className="card-title">{props.kaomoji}</h5>
        <p className="card-text">{copied ? "Copied!" : props.meaning}</p>
      </div>
    </div>
  );
}

KaomojiCard.propTypes = {
  kaomoji: PropTypes.string,
  meaning: PropTypes.string,
};

export default KaomojiCard;
