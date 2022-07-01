import { useEffect } from "react";
import { useAtom, useSetAtom, useAtomValue } from "jotai";
import { userAtom, JWT, isAdmin, Cart } from "store/atoms";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "assets/styles/profile.scss";
import  AOS  from 'aos';
import "aos/dist/aos.css";


const Profile = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, []);
   

    const [ user, setUser ] = useAtom(userAtom);
    const setToken = useSetAtom(JWT);
    const setCart = useSetAtom(Cart);
    const setAdmin = useSetAtom(isAdmin);
    const jwt = useAtomValue(JWT);
    const alert = useAlert();
    const navigate = useNavigate();

    const updateUser = (datas) => {
        setUser(datas)
        sendToDB(datas)
        Cookies.set('user', JSON.stringify(datas), {
            sameSite: "none",
            secure: true
          }) 
    }

    const editUser = () => {
        let form = document.getElementById('editForm')
        let formData = Array.from(new FormData(form))
        let current_user = user
        current_user[formData[0][0]] = formData[0][1] === "" ? current_user[formData[0][0]] : formData[0][1]
        current_user[formData[1][0]] = formData[1][1] === "" ? current_user[formData[1][0]] : formData[1][1]
        current_user[formData[2][0]] = formData[2][1] === "" ? current_user[formData[2][0]] : formData[2][1]
        current_user[formData[3][0]] = formData[3][1] === "" ? current_user[formData[3][0]] : formData[3][1]
        updateUser(current_user)
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
        alert.success('Profil enregistré !')
    }

    const deleteAccount = () => {
        fetch("https://pokeland-api.herokuapp.com/users", {
            method: "delete",
            headers: {
                "Authorization": jwt,
                "Content-Type": "application/json"
            }
        })
        .then((response) => {return response.json()})
        .then(() => {
            setToken("");
            setUser([]);
            setCart(JSON.stringify([]))
            setAdmin("false");
            alert.success("Votre compte à été supprimé 🙁")
            navigate("/");
        })
        .catch((error) => console.error(error))
    }

    return (
        <div className="form-background">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-0"></div>
                <div className="col-lg-6">
                    <div data-aos="flip-right" className="gb-body">
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
                    <button className="card-link dark-link remove-link timesNew" onClick={() => {if(window.confirm('Voulez-vous vraiment supprimer votre compte ?'))
            {deleteAccount()}}} >Supprimer mon compte</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;





