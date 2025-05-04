import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SoicalLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Login with </h1>
      <div className="space-y-5">
        <button className="btn w-full btn-outline btn-info">
          <FaGoogle size={20} /> Login with Google
        </button>{" "}
        <br />
        <button className="btn w-full btn-outline btn-primary">
          <FaGithub size={20} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SoicalLogin;
