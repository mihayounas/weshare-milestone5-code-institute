import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { axiosReq } from "../../api/axiosDefaults";

function ShareModal({ shareModalVisible, setShareModalVisible, post, owner, id, title, }) {

  const [error, setError] = useState('');

  const sharePost = async () => {
    const share = {
      post: id,
      owner: owner,
    }

    try {
      const { data } = await axiosReq.post(`/posts/${id}/share`, share);
      console.log(data)
      setShareModalVisible(false)
    } catch (err) {
      console.log(err);
      setError(err.message);
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
        {error && <p>{error}</p>}
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