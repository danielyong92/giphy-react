import React, { useState, useEffect } from "react";
import GiphyResult from "../GiphyResult/GiphyResult";
import { GiphyData } from "../../Type/giphySearch";
import "./Homepage.css";

export const Homepage = () => {
  const [catData, setCatData] = useState<Array<GiphyData>>([]);
  const [dogData, setDogData] = useState<Array<GiphyData>>([]);

  const giphyCatSearch = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=LXTa9gMarNNr4VcOOhbKXEDVFDKPwCGO&q=cats&limit=15";
    const response = await fetch(url);
    let giphy = await response.json();

    setCatData(giphy.data);
  };

  const giphyDogSearch = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=LXTa9gMarNNr4VcOOhbKXEDVFDKPwCGO&q=dogs&limit=15";
    const response = await fetch(url);
    let giphy = await response.json();

    setDogData(giphy.data);
  };

  useEffect(() => {
    console.log("catData", catData);
    console.log("dogData", dogData);
  }, [catData, dogData]);

  return (
    <>
      <div className="Topbar">
        <h3>GIPHY:</h3>
        <div className="buttons-container">
          <button
            type="button"
            data-testid="cat-button"
            className="btn btn-primary"
            onClick={giphyCatSearch}
          >
            Cats
          </button>
          <button
            type="button"
            data-testid="dog-button"
            className="btn btn-success"
            onClick={giphyDogSearch}
          >
            Dogs
          </button>
        </div>
        <GiphyResult catData={catData} dogData={dogData} />
      </div>
    </>
  );
};
export default Homepage;
