import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../config/Auth";
import { app2 } from "../../config/Firebase";

const Login2 = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app2
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home2");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser2 } = useContext(AuthContext);

  if (currentUser2) {
    return <Redirect to="/home2" />;
  }

  return (
    <div>
      <h1>Log In Secondary</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default withRouter(Login2);
