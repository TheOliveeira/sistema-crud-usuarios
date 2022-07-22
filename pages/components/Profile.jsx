import React, { useEffect, useState } from "react";
import Avatar from "boring-avatars";

/**https://boringavatars.com/ */

export default function Profile() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setShowComponent(true);
  }, []);

  return (
    <div>
      {showComponent === true && (
        <Avatar
          size={50}
          name="Mary Baker"
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
      )}
    </div>
  );
}
