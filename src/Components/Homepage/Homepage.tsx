import React, { useState } from "react";

export const Homepage = () => {
    const[ giphyData, setGiphyData ] = useState([]);

  const giphyCatSearch = async () => {
      const url = "https://api.giphy.com/v1/gifs/search?api_key=LXTa9gMarNNr4VcOOhbKXEDVFDKPwCGO&q=cats&limit=5";
      const response = await fetch(url);
      
      let giphy = await response.json();
      // giphy.push(await response.json());
      console.log("giphy search", giphy.data)
    setGiphyData(giphy.data);
  };

  const giphyDogSearch = async () => {
      const url = "https://api.giphy.com/v1/gifs/search?api_key=LXTa9gMarNNr4VcOOhbKXEDVFDKPwCGO&q=dogs&limit=5";
      const response = await fetch(url);
      
      let giphy = await response.json();
      // giphy.push(await response.json());
      console.log("giphy search", giphy.data)
    setGiphyData(giphy.data);
  };

  return (
    <>
      <div className="Topbar">
        <div>This is homepage</div>
        <button onClick={giphyCatSearch}>Cats</button>
        <button onClick={giphyDogSearch}>Dogs</button>
      </div>
    </>
  );
};
export default Homepage;
