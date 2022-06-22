import React, { useState } from "react";


const ForgotPassword = () => {

    const [ email, setEmail ] = useState("");

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
        })}

    return (
        <>
        <div className="user">
          <header className="user__header">
          <h2 className="user__title">
            A quelle adresse email doit-on envoyer la réinitialisation de ton mot de passe ?
          </h2>
        </header>
         <form className="form" id="form" onSubmit={sendMail} >
          <div className="form__group">
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
          </div>
        </>
    )
}

export default ForgotPassword;