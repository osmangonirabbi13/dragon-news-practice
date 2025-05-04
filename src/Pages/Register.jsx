import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-semibold text-2xl py-5">
            Register your account
          </h2>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name "
            />
            {/* Photo URL */}
            <label className="label">Photo Url </label>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url "
            />
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div></div>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="py-5 text-sm text-center font-semibold">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
