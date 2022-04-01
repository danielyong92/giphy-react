import React from "react";
import GiphyCard from "../GiphyCard/GiphyCard";
import { GiphyResultProps } from "../../Type/giphySearch";

export const GiphyResult: React.FC<GiphyResultProps> = props => {
  const { catData, dogData } = props;
  console.log("catData in result", catData)
  return (
    <>
      <h3>Gifs! Have fun!</h3>
      {catData &&
        catData.map((cats, index) => (
          <GiphyCard imageUrl={cats.images.downsized_medium.url} key={index} />
        ))}
      {dogData &&
        dogData.map((dogs, index) => (
          <GiphyCard imageUrl={dogs.images.downsized_medium.url} key={index} />
        ))}
    </>
  );
};

export default GiphyResult;
