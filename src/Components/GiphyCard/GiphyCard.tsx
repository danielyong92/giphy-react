import React, { useState } from "react";
import { GiphyCardProps } from "../../Type/giphySearch";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { textAlign } from "@mui/system";

export const GiphyCard: React.FC<GiphyCardProps> = props => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { imageUrl, title, rating } = props;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center"
  };
  // console.log("props", props);
  return (
    <>
      <img src={imageUrl}></img>
      <div>
        <Button onClick={() => setOpenModal(true)} id="clickMe">Click me!</Button>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 500 }}>
            <h3 id="modalTitle">Details</h3>
            <p id="modalDescription">
              <div>Title: {title}</div>
              <div>Rating: {rating}</div>
            </p>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default GiphyCard;
