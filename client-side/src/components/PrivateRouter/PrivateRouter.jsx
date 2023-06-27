import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import  HashLoader from "react-spinners/HashLoader"
const PrivateRouter = ({children}) => {
const {user , loading} = useContext(AuthContext) ;
const location = useLocation() ;
if(loading){
return (
    <>
      <div style={{margin:"15% 48%"}}>
      <HashLoader color="blue"></HashLoader>
      </div>
    </>
)
}
if(user && user.uid ) {
return children ;
}
return <Navigate to="/login" state={{from : location}} replace></Navigate>

};

export default PrivateRouter;