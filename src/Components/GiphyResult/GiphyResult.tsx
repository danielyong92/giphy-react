import React from "react";
import GiphyCard from "../GiphyCard/GiphyCard";

export type GiphyResultProps = {
  catData: Array<Data>
  dogData: Array<Data>
};

export type Data = {
  images: Images;
}

export type Images = {
  downsized_medium: Url;
}

export type Url = {
  url:string;
}

export const GiphyResult: React.FC<GiphyResultProps> = props => {
  const { catData, dogData } = props;
  console.log("catData in result", catData)
  return (
    <>
      <div>Result Sections!</div>
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
