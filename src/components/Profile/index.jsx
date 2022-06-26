import { useAtom } from "jotai";
import { userAtom } from "store/atoms";
import "assets/styles/profile.scss";



const Profile = () => {
    const [user, setUser] = useAtom(userAtom);

    const editUser = () => {
        let form = document.getElementById('editForm')
        let formData = Array.from(new FormData(form))
        let current_user = JSON.parse(user)
        current_user[formData[0][0]] = formData[0][1]
        current_user[formData[1][0]] = formData[1][1] 
        current_user[formData[2][0]] = formData[2][1] 
        current_user[formData[3][0]] = formData[3][1]
        setUser(current_user)
        console.log(Array.from(formData))
    }

    return (
        <div className="form-background">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-0"></div>
                <div className="col-lg-4">
                    <div className="gb-body">
                        <div className="screen-outer">
                            <div className="user-card">
                                <p>Prénom :<br/> {user.first_name}</p>
                                <p>Nom : <br/>{user.last_name}</p>
                                <p>Email : <br/>{user.email}</p>
                                <p>Téléphone : <br/>{user.phone}</p>
                            </div>
                        </div>
                        <p className="timesNew brand">Votre profil sur POKELAND</p>
                        <form className="edit-user" id="editForm" onSubmit={event => {event.preventDefault(); editUser(event)}}>
                            <input type="text" className="edit-input" placeholder="Prénom" id="first_name" name="first_name"/>
                            <input type="text" className="edit-input" placeholder="Nom" id="last_name" name="last_name"/>
                            <input type="text" className="edit-input" placeholder="Email" id="email" name="email"/>
                            <input type="text" className="edit-input" placeholder="Tel" id="phone" name="phone"/>
                            <input type="submit" className="cart-btn edit-btn" value="Enregistrer" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;





