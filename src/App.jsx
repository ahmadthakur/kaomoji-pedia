import "./App.css";
import kaomojis from "./assets/kaomoji";
import KaomojiCard from "./components/KaomojiCard";

function createCard(kaomoji) {
  return (
    <KaomojiCard
      key={kaomoji.id}
      kaomoji={kaomoji.face}
      meaning={kaomoji.description}
    />
  );
}

function App() {
  return (
    <>
      <h1 className="title">100 Kaomojies</h1>
      <h2 className="subtitle">Click to copy</h2>
      <div className="collection">{kaomojis.map(createCard)}</div>
    </>
  );
}

export default App;
