import React, { useEffect, useState } from "react";
import Avatar from "boring-avatars";

const Profile = (props) => {
  console.log("PROFIle", props)
  const [showComponent, setShowComponent] = useState(false);
  const [profileName, setProfileName] = useState("Mary Baker");
  const [profilePallete, setProfilePallete] = useState();

  useEffect(() => {
    setShowComponent(true);
    setProfileName(props.nome);
  }, []);

  return (
    <div>
      {showComponent === true && (
        <Avatar
          size={50}
          name={profileName}
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
      )}
    </div>
  );
};

export default Profile;
