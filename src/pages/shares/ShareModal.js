import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { axiosRes } from "../../api/axiosDefaults";



function ShareModal({ shareModalVisible, setShareModalVisible, post, owner, id, title, image }) {
  const [share, setShare] = useState();
  const sharePost = async () => {
    try {
      const { data } = await axiosRes.post("/shares/", { share: id });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={shareModalVisible}
      onHide={setShareModalVisible}>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{title}</p>
        <p>{owner} </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary"
          onClick={() => setShareModalVisible(false)}
        >Cancel</Button>
        <Button variant="primary"
          onClick={sharePost}
        >Share</Button>
      </Modal.Footer>

    </Modal>
  );
}
export default ShareModal;