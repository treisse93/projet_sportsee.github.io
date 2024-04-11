import "../../sass/Layout/MainHomePage.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { USER_MAIN_DATA } from "../../mockDatas/data.jsx";

export default function MainHomePage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(USER_MAIN_DATA);
  }, []);

  return (
    <div className="HomePageMenu">
      {userData.map((user) => (
        <Link
          key={user.id}
          className="HomePageMenu--Link"
          to={`/profile/${user.id}`}
        >
          {user.userInfos.firstName}
        </Link>
      ))}
    </div>
  );
}