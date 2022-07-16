import React, { useState } from "react";
import "./App.css";

const LogoutButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);

const LoginButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
);

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  if (isLoggedIn) {
    return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }

  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
};

export default function App() {
  return <LoginControl />;
}
