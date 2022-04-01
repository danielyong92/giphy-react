import React from "react";

export type GiphyCardProps = {
  imageUrl: string;
  key: number;
};

export const GiphyCard: React.FC<GiphyCardProps> = props => {
  const { imageUrl, key } = props;
//   console.log("props", props);
  return (
    <>
      <div>GiphyCard</div>
      <img src={imageUrl}></img>
    </>
  );
};

export default GiphyCard;
