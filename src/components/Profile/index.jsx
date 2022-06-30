import { useAtom, useAtomValue } from "jotai";
import { userAtom, JWT } from "store/atoms";
import Cookies from "js-cookie";
import "assets/styles/profile.scss";



const Profile = () => {
    const [user, setUser] = useAtom(userAtom);
    const jwt = useAtomValue(JWT)

    const editUser = () => {
        let form = document.getElementById('editForm')
        let formData = Array.from(new FormData(form))
        let current_user = user
        current_user[formData[0][0]] = formData[0][1] === "" ? current_user[formData[0][0]] : formData[0][1]
        current_user[formData[1][0]] = formData[1][1] === "" ? current_user[formData[1][0]] : formData[1][1]
        current_user[formData[2][0]] = formData[2][1] === "" ? current_user[formData[2][0]] : formData[2][1]
        current_user[formData[3][0]] = formData[3][1] === "" ? current_user[formData[3][0]] : formData[3][1]
        setUser(current_user)
        sendToDB(current_user)
        Cookies.set('user', JSON.stringify(current_user), {
            sameSite: "none",
            secure: true
          }) 
    }

    const sendToDB = (user) => {
        fetch("https://pokeland-api.herokuapp.com/update-user", {
            method: "post",
            headers: {
                "Authorization": jwt,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    phone: user.phone
                },
            })
        }).catch((error) => console.error(error))
    }

    return (
        <div className="form-background">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-0"></div>
                <div className="col-lg-6">
                    <div className="gb-body">
                        <div className="screen-outer">
                            <div className="user-card row">
                                <div className="col-lg-6 col-md-6">
                                    <p>Prénom :<br /> {user.first_name}</p>
                                    <p>Nom : <br />{user.last_name}</p>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <p>Email : <br />{user.email}</p>
                                    <p>Téléphone : <br />{user.phone}</p>
                                </div>
                            </div>
                        </div>
                        <p className="timesNew brand">Votre profil sur POKELAND</p>
                        <form className="edit-user" id="editForm" onSubmit={event => { event.preventDefault(); editUser(event) }}>
                            <input type="text" className="edit-input" placeholder="Prénom" id="first_name" name="first_name" />
                            <input type="text" className="edit-input" placeholder="Nom" id="last_name" name="last_name" />
                            <input type="text" className="edit-input" placeholder="Email" id="email" name="email" />
                            <input type="text" className="edit-input" placeholder="Tel" id="phone" name="phone" />
                            <input type="submit" className="cart-btn edit-btn" value="Enregistrer" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;





