import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };

    //send registration mail
    await auth.sendSignInLinkToEmail(email, config);

    //display toast notification
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );

    //save email in local storage
    window.localStorage.setItem("emailForRegistration", email);

    //clear email state
    setEmail("");
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={handleChange}
          autoFocus
        />
        <button type="submit" className="btn btn-raised">
          Register
        </button>
      </form>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          <ToastContainer />
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
