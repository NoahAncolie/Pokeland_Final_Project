import { useAtomValue } from "jotai";
import { userAtom } from "store/atoms";
import "../../assets/styles/profile.scss";



const Profile = () => {
    const user = useAtomValue(userAtom);
    console.log(user)
    
    return(

        <>
       
<div class="container mt-5">
    
    <div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
                
                <div class="text-center">
                    <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle"/>
                </div>
                
                <div class="text-center mt-3">
                    <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                    <h3 class="mt-2 mb-0">  {user} </h3>
                    <h3> {user.first_name}</h3>
                    <h4>Email: {user.email} </h4>
                   
                </div>
                
            </div>
            
        </div>
        
    </div>
    
</div>
        
        </>

    )
}

export default Profile;





