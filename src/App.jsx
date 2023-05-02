import { useState } from "react";
import "./App.css";
import kaomoji from "./assets/kaomoji";
import KaomojiCard from "./components/KaomojiCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";

function createCard(kaomoji) {
  return <KaomojiCard kaomoji={kaomoji} />;
}

function App() {
  const [category, setCategory] = useState(kaomoji[0].list);

  function handleClick(event) {
    let categoryName = event.target.innerText;

    //in the kaomoji.js, find the obj with the same name as the button
    const obj = kaomoji.find((item) => item.name == categoryName);
    setCategory(obj.list);
  }

  return (
    <>
      <Header />
      <div className="button-container">
        {kaomoji.map((category) => {
          return (
            <>
              <Button onClick={handleClick} text={category.name} />
            </>
          );
        })}
      </div>
      <div className="card-collection">{category.map(createCard)}</div>
      <Footer author={"Sushipie"} />
    </>
  );
}

export default App;
