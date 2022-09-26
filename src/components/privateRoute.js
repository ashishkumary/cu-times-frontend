import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log("userInfoPri", userInfo);
  return (
    <div className="">
      <Route
        {...rest}
        render={(props) =>
          userInfo ? (
            <Component {...props}></Component>
          ) : (
            <Redirect to="/signin"></Redirect>
          )
        }
      ></Route>
    </div>
  );
}
// signed user only can access those links
