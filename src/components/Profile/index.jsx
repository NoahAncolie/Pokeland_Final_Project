import { useAtomValue } from "jotai";
import { userAtom } from "store/atoms";
import "../../assets/styles/profile.scss";



const Profile = () => {
    const user = useAtomValue(userAtom);
    console.log(user)
 
    
    return(

        <>
       
<div className="container mt-5">
    
    <div className="row d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-3 py-4">
                
                <div className="text-center">
                    <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle"/>
                </div>
                
                <div className="text-center mt-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                    <h3 className="mt-2 mb-0"> Paolucci Loic </h3>
                    <h4>Email: </h4>
                    <h4>Adress: </h4>
                    <h4>Telephone: </h4>
                </div>

                <div className="buttons">  
                <button className="btn btn-outline-primary px-4">Message</button>
                <button className="btn btn-primary px-4 ms-3">Contact</button>
                </div>

            </div>
            
        </div>
        
    </div>
    
</div>
        
        </>

    )
}

export default Profile;





