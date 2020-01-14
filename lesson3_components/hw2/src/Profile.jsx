import React from "react";
import "./profile.scss";

const Profile = props => {
  return (
    <div className="profile">
      <div className="profile__name">
        {`${props.userData.firstName} ${props.userData.lastName}`}
      </div>
      <div className="profile__birth">
        {`Was born ${props.userData.birthDate} in ${props.userData.birthPlace}`}
      </div>
    </div>
  );
};

export default Profile;
