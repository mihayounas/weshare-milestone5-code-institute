import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useEffect } from 'react';
import { axiosReq } from "../../api/axiosDefaults";

function ShareModal({ shareModalVisible, setShareModalVisible, post, owner, id, title, }) {
  const [error, setError] = useState('');
  const history = useHistory();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username;
  const [postDetails, setPostDetails] = useState({});

  const getPostDetails = async (postId) => {
    try {
      const { data } = await axios.get(`/posts/${postId}`);
      setPostDetails(data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  useEffect(() => {
    getPostDetails(id);
  }, []);

  const sharePost = async () => {
    const share = {
      post: id,
      owner: is_owner,
    }
    try {
      await axiosReq.post(`/shared`, share);
      setShareModalVisible(false)
      history.push("/shares");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }
  return (
    <Modal
      show={shareModalVisible}
      onHide={setShareModalVisible}>
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



