import { userInfo } from "os";
import React, { useState } from "react";

const Main = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    username: "",
  });
  return (
    <div className="main">
      This is the Main component
      <input
        value={userInfo.username}
        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
      />
      <h1>{userInfo.username}</h1>
    </div>
  );
};

export default Main;
