import React, { useState } from "react";
import { GiphyCardProps } from "../../Type/giphySearch";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export const GiphyCard: React.FC<GiphyCardProps> = props => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { imageUrl } = props;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };
  console.log("props", props);
  return (
    <>
      <img src={imageUrl}></img>
      <div>
        <Button onClick={() => setOpenModal(true)}>Click me!</Button>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title"></h2>
            <p id="parent-modal-description">
              
            </p>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default GiphyCard;
