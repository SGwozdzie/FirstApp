import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";

import LoginPanel from "./components/Login/LoginPanel";
import MainPanel from "./components/Main/MainPanel";

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);

  return <>{isLogged ? <MainPanel /> : <LoginPanel />}</>;
}

export default App;
