import { useDispatch } from "react-redux";

import { authActions } from "../../store/auth";
import classes from "./LoginPanel.module.css";

function LoginPanel() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authActions.login());
  };

  return (
    <main className={classes.panel}>
      <section>
        <form>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </p>
          <button onClick={handleLogin}>Login</button>
          <button onClick={() => {}}>Sign up</button>
        </form>
      </section>
    </main>
  );
}

export default LoginPanel;
