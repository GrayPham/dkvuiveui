import React from "react";
import { useSelector } from "react-redux";

import UserAccountBtn from "./UserAccountBtn";
import LoginBtn from "./LoginBtn";
import { IUserInfoRootState } from "@/types/user";

const User = () => {
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );
  return <div>{userInfo ? <UserAccountBtn /> : <LoginBtn />}</div>;
};

export default User;
