import { createContext, useState } from "react";
import LoginWrapper from "./LoginWrapper.js";
import LoggedWrapper from "./LoggedWrapper.js";
import "./style.css";
import store from "./store.js";
import {Provider} from "react-redux";
export const AuthContext = createContext();
const App = function () {
  const [isUserLogin, setUserLogin] = useState(() =>
    Boolean(localStorage.getItem("token"))
  );
  if (!isUserLogin) {
    return (
      <AuthContext.Provider value={{ setUserLogin }}>
        <LoginWrapper />
      </AuthContext.Provider>
    );
  }
  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ setUserLogin }}>
        <LoggedWrapper />
      </AuthContext.Provider>
    </Provider>
  );
};
export default App;
