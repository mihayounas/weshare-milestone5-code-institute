import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";



function ShareModal({ shareModalVisible, setShareModalVisible, title, content, owner, id }) {
  const currentUser = useCurrentUser();
  const sharePost = async () => {
    try {
      const { data } = await axiosRes.post(`/posts/${id}/share`, { userId: currentUser.id });
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
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{content}</p>
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