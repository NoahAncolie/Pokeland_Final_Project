import { useAtomValue } from "jotai";
import { userAtom } from "store/atoms";


const Profile =() => {
    const userId = useAtomValue(userAtom);
    console.log(userId)
    return(

        <>
       
        <p>{userId.id}</p>
        
        
        
        
        
        
        
        
        </>

    )
}

export default Profile;





