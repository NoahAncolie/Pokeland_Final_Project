import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useSetAtom } from "jotai";
import { userAtom, JWT } from "store/atoms";
import { Link } from "react-router-dom";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setToken = useSetAtom(JWT);
  const setUser = useSetAtom(userAtom);

  function fetchData(e) {

    e.preventDefault();
    fetch("https://pokeland-api.herokuapp.com/users/sign_in", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    }).then((response) => {
      console.log(response);
      setToken(response.headers.get("Authorization"));
      Cookies.set('token', response.headers.get("Authorization"), {
        sameSite: "none",
        secure: true
      })
      return (response.json())
    }).then((response) => {
      console.log(response);
      setUser(response.user);
      Cookies.set('user', JSON.stringify(response.user), {
        sameSite: "none",
        secure: true
      })
    })
      .catch((err) => console.error(err));
  }


  return (
    <div className="form-background">
      <div className="row">
        <div className="col-sm-0 col-lg-4"></div>
        <div className="col-lg-4 form">
          <header className="user__header">
            <h2 className="user__title">
              Connecte toi ici. 👇
            </h2>
          </header>

          <form className="" id="form" onSubmit={fetchData} >
            <div className="">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form__input"
              />
            </div>

            <div className="">
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form__input"
              />
            </div>


            <input className="btn" type="submit" value="Se connecter" />
          </form>
          <Link to="/register" className="change-form">S'enregistrer</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;