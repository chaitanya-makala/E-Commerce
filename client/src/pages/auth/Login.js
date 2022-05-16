import React, { useState } from "react";

import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined, MDBBtn } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
        toast.success("Login success");
        history.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      toast.success("Login success");
      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const loginForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
          autoFocus
        />
        <br />
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
        />
        <br />
        <Button
          onClick={handleSubmit}
          className="mb-3"
          type="primary"
          // ghost
          block
          shape="round"
          icon={<MailOutlined style={{ fontSize: "1.3rem" }} />}
          size="large"
          disabled={!email || password.length < 6}
        >
          Login with Email/Password
        </Button>
        <Button
          onClick={googleLogin}
          className="mb-3"
          type="danger"
          // ghost
          block
          shape="round"
          icon={<GoogleOutlined style={{ fontSize: "1.3rem" }} />}
          size="large"
        >
          Login with Google
        </Button>
        <Link to="/forgot/password" className="float-end text-danger">
          Forgot Password
        </Link>
      </form>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? <h4 className="text-danger">Loading</h4> : <h4>Login</h4>}
          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
