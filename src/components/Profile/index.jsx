import { useAtomValue } from "jotai";
import { userAtom } from "store/atoms";
import "../../assets/styles/profile.scss";



const Profile = () => {
    const user = JSON.parse(useAtomValue(userAtom));
    console.log(user)
 
    
    return(
        <div className="form-background">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-0"></div>
                <div className="col-lg-4">
                    
                </div>
            </div>
        </div>
    )
}

export default Profile;





