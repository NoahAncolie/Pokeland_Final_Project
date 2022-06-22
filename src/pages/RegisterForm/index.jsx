import React, { useState } from "react";
import Cookies from "js-cookie";
import { useSetAtom } from "jotai";
import { userAtom, JWT } from "store/atoms";
import { Link } from "react-router-dom";
import "../../assets/styles/forms.scss";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const setUser = useSetAtom(userAtom);
  const setToken = useSetAtom(JWT);


  function fetchData(e) {
    e.preventDefault();
    fetch("https://pokeland-api.herokuapp.com/users", {
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
  };



  return (
    <div className="form-background">
      <div className="row">
        <div className="col-sm-0 col-lg-4"></div>
        <div className="col-lg-4 form">
          <header className="user__header">
            <h2 className="user__title">
              Rempli le formulaire ci-dessous pour t'inscrire. 🙂
            </h2>
          </header>

          <form className="" id="form" onSubmit={fetchData}>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                className="form__input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="">
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                className="form__input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="">
              <input
                type="password"
                placeholder="Password confirmation"
                name="passwordConfirmation"
                id="passwordConfirmation"
                value={passwordConfirm}
                className="form__input"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>

            <input className="btn" type="submit" value="S'inscrire" />
          </form>
          <Link to="/connect" className="change-form">Se connecter</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
