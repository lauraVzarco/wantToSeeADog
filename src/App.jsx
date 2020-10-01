import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Button from "./components/Button/Button.jsx";
import ImageComp from "./components/ImageComp/ImageComp.jsx";

function App() {
  const [dogData, setDogData] = useState({});
  const [catData, setCatData] = useState([{}]);

  const [wantDog, setWantDog] = useState("nada");

  const urlDog = "https://dog.ceo/api/breeds/image/random";
  const urlCat = "https://api.thecatapi.com/v1/images/search";

  const handleClickYes = async () => {
    const result = await axios(urlDog);
    setWantDog("yes");
    setDogData(result.data);
  };

  const handleClickNo = async () => {
    const result = await axios(urlCat);
    setWantDog("no");
    setCatData(result.data);
  };

  const isDogWanted = () => {
    let msg;
    if (wantDog === "nada") {
      msg = <div>Esperando tu respuesta</div>;
    } else if (wantDog === "yes") {
      msg = <ImageComp src={dogData.message} />;
    } else if (wantDog === "no") {
      msg = <ImageComp src={catData[0].url} />;
    }
    return msg;
  };
  return (
    <div className="App">
      <h1> KIERES BER 1 PERRIWI?!</h1>
      <div className="buttonsPlace">
        <Button text="Chi!" onClick={handleClickYes}></Button>
        <Button text="Ño!" onClick={handleClickNo}></Button>
      </div>
      {isDogWanted()}
    </div>
  );
}

export default App;
