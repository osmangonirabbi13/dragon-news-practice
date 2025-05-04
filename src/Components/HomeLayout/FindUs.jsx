import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold">Find Us on</h1>
      <div>
        <div className="join join-vertical w-full pt-6">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook /> Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaTwitter /> Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
