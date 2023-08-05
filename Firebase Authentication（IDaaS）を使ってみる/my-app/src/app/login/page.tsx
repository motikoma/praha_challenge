"use client";

import { getAuth } from "firebase/auth";
import { login, logout } from "../../lib/login";

export default function Login() {
  const handleClickLogin = () => {
    login();
  };
  const handleClickLogout = () => {
    logout();
  };
  const handleClickLoginCheck = () => {
    const auth = getAuth();
    if (auth.currentUser) {
      alert(`${auth.currentUser?.displayName}でログインしてます。`);
    } else {
      alert("ログインしてないです。");
    }
  };

  const handleFetch = async () => {
    const auth = getAuth();
    const token = await auth.currentUser?.getIdTokenResult();
    const requestToken = token?.token;

    const res = await fetch("/api/hello", {
      method: "GET",
      headers: {
        mode: "cors",
        Authorization: `Bearer ${requestToken}`,
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    console.log(json);
  };

  return (
    <div className='w-64 m-auto'>
      <h2>Login</h2>
      <div>
        <button onClick={handleClickLogin}>Googleでログイン</button>
      </div>
      <div>
        <button onClick={handleClickLogout}>ログアウト</button>
      </div>
      <div>
        <button onClick={handleClickLoginCheck}>ログインチェック</button>
      </div>
      <div>
        <button onClick={handleFetch}>APIリクエスト</button>
      </div>
    </div>
  );
}
