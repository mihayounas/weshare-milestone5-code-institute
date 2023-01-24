import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useHistory } from "react-router-dom";

function ShareModal({ shareModalVisible, setShareModalVisible, owner, id, title, }) {
  const [error, setError] = useState('');
  const history = useHistory();

  const sharePost = async () => {
    const share = {
      post: id,
      owner: owner,
    }

    try {
      const { data } = await axios.post(`/shared/`, share);
      console.log(data)
      setShareModalVisible(false)
      history.push("/shares");
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
        <h1>Post Title: {title}</h1>
        <p>Posted By: {owner} </p>
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



