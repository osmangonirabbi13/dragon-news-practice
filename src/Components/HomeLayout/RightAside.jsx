import React from "react";
import SoicalLogin from "./SoicalLogin";
import FindUs from "./FindUs";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SoicalLogin></SoicalLogin>
      <FindUs />
    </div>
  );
};

export default RightAside;
