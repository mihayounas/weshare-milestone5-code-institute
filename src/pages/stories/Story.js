import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";


const Story = (props) => {
  const {
    id,
    owner,
    location,
    image,
    updated_at,
    setStories,
    stories,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();


  const handleEdit = () => {
    history.push(`/stories/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/stories/${id}`);
      let filteredStories = stories.filter(story => story.id !== id)
      setStories(filteredStories)
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Container style={{ width: "230px" }}>
      <Card className={styles.Post} style={{ width: '15rem', }}>
        <Card.Body >
          <Media className="align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span>{updated_at}</span>
              <MoreDropdown
                isOwner={is_owner}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          </Media>
        </Card.Body>

        <Card.Img src={image} style={{ height: "180px", objectFit: "cover" }} />

        <Card.Body>
          {owner && <Card.Title className="text-center">{owner}'s Story</Card.Title>}
          {location && <Card.Text>Location:{location}</Card.Text>}

        </Card.Body>
      </Card>
    </Container>
  );
}


export default Story;