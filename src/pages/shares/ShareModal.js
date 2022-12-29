import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";



function ShareModal({ shareModalVisible, setShareModalVisible, post, owner, id }) {
  const currentUser = useCurrentUser();
  const sharePost = async () => {
    try {
      const { data } = await axiosRes.post(`/posts/${id}/shares/`, { post: id });
      setShareModalVisible(false)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Modal
      show={shareModalVisible}
      onHide={setShareModalVisible}>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{post}</p>
        <p>{owner}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary"
          onClick={() => setShareModalVisible(false)}
        >Cancel</Button>
        <Button variant="primary"
          onClick={sharePost}>Share Post</Button>
      </Modal.Footer>

    </Modal>
  );
}
export default ShareModal;