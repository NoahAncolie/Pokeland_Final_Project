import React, { useState } from "react";
import { Link } from "react-router-dom";


const ForgotPassword = () => {

  const [email, setEmail] = useState("");

  function sendMail() {

    fetch("https://pokeland-api.herokuapp.com/users/password", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: email,
        },
      }),
    }).then((response) => {
      console.log(response)
        .catch((err) => console.error(err));
    })
  }

  return (
    <div className="form-background">
      <div className="row">
        <div className="col-sm-0 col-lg-4"></div>
        <div className="col-lg-4 form">
          <header className="user__header">
            <h2 className="user__title">
              Entre ton email ici. 👇
            </h2>
          </header>
          <form className="" id="form" onSubmit={sendMail} >
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
            <input className="btn" type="submit" value="Envoyer" />
          </form>
          <Link to="/connect" className="change-form">Se connecter</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;