import React, { useState, useEffect } from "react";
import GiphyResult from "../GiphyResult/GiphyResult";

export const Homepage = () => {
    const[ catData, setCatData ] = useState([]);
    const[ dogData, setDogData ] = useState([]);

  const giphyCatSearch = async () => {
      const url = "https://api.giphy.com/v1/gifs/search?api_key=LXTa9gMarNNr4VcOOhbKXEDVFDKPwCGO&q=cats&limit=15";
      const response = await fetch(url);
      let giphy = await response.json();
      
      setCatData(giphy.data);
  };

  const giphyDogSearch = async () => {
      const url = "https://api.giphy.com/v1/gifs/search?api_key=LXTa9gMarNNr4VcOOhbKXEDVFDKPwCGO&q=dogs&limit=15";
      const response = await fetch(url);
      let giphy = await response.json();

      setDogData(giphy.data);
  };

  useEffect(()=> {
    console.log("catData", catData)
    console.log("dogData", dogData)
  },[catData,dogData])

  return (
    <>
      <div className="Topbar">
        <div>This is homepage</div>
        <button onClick={giphyCatSearch}>Cats</button>
        <button onClick={giphyDogSearch}>Dogs</button>

        <GiphyResult catData={catData} dogData={dogData}/>
      </div>
    </>
  );
};
export default Homepage;
