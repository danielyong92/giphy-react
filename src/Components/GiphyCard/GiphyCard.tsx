import React from "react";
import { GiphyCardProps } from "../../Type/giphySearch";

export const GiphyCard: React.FC<GiphyCardProps> = props => {
  const { imageUrl } = props;
//   console.log("props", props);
  return (
    <>
      <img src={imageUrl}></img>
    </>
  );
};

export default GiphyCard;
