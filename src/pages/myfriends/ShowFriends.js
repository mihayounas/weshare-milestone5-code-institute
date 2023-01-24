import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "../profiles/Profile";

const ShowFriends = ({ mobile }) => {
    const { popularProfiles } = useProfileData();
    const [profile] = popularProfiles.results;

    return (
        <Container
            className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"
                }`}
        >
            {popularProfiles.results.length ? (
                <>
                    <p>Check or Add More Followers.</p>
                    {mobile ? (
                        <div className="d-flex justify-content-around">
                            {popularProfiles.results.slice(0, 4).map((profile) => (
                                <Profile key={profile.id} profile={profile} mobile />
                            ))}
                        </div>
                    ) : (
                        popularProfiles.results.map((profile) => (
                            <Profile key={profile.id} profile={profile} />
                        ))
                    )}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default ShowFriends;