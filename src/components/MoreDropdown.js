import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fas fa-ellipsis-v"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

export const MoreDropdown = ({ handleEdit, handleDelete, handleShare, isOwner }) => {
    const renderOwnerActions = () => {
        if (isOwner){
            return <React.Fragment>
                 <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="edit"
                >
                    <i className="fas fa-edit" />
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label="delete"
                >
                    <i className="fas fa-trash-alt" />
                </Dropdown.Item>
            </React.Fragment>
        }
    }
    return (
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={ThreeDots} />

            <Dropdown.Menu
                className="text-center"
                popperConfig={{ strategy: "fixed" }}
            >
               {renderOwnerActions()}
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleShare}
                    aria-label="share"
                ><i className="fa fa-share"></i></Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    );
};

export const ProfileEditDropdown = ({ id }) => {
    const history = useHistory();
    return (
        <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
            <Dropdown.Toggle as={ThreeDots} />
            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit`)}
                    aria-label="edit-profile"
                >
                    <i className="fas fa-edit" /> Edit Profile
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/username`)}
                    aria-label="edit-username"
                >
                    <i className="far fa-id-card" />
                    Change Username
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/password`)}
                    aria-label="edit-password"
                >
                    <i className="fas fa-key" />
                    Change Password
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};