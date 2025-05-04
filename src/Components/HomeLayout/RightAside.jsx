import React from "react";
import SoicalLogin from "./SoicalLogin";
import FindUs from "./FindUs";
import Qzone from "./Qzone";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SoicalLogin></SoicalLogin>
      <FindUs />
      <Qzone />
    </div>
  );
};

export default RightAside;
