import {createBrowserRouter} from "react-router-dom" ;
import MainLayout from "../../Layout/MainLayout";
import Error from "../Error/Error";
import AddServices from "../pages/AddService/AddServices";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyReview from "../pages/MyReview/MyReview";
import MyReviewUpdate from "../pages/MyReviewUpdate/MyReviewUpdate";
import Register from "../pages/Register/Register";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
export const routers = createBrowserRouter([
{ paht:"/" , element: <MainLayout></MainLayout> , children:[
{
path:"/" , 
loader: async () => fetch(` https://lotus-pc-service-subrota22.vercel.app/service-data-limit`) 
, element:<Home></Home>
} ,
{
path:"/login" , element:<Login></Login>
}
,{
path:"/register" , element:<Register></Register>
}
, {
path:"/blogs" , element:<Blogs></Blogs>
}
,{
path:"/my-review" 
, element:<PrivateRouter><MyReview></MyReview></PrivateRouter>
}
, {
path:"/add-service" , element:<PrivateRouter><AddServices></AddServices></PrivateRouter>
} , 
{
 path:"/reset-password" , element:<ResetPassword></ResetPassword>
}
,
{
path:"/services" , 
loader : async () => fetch(` https://lotus-pc-service-subrota22.vercel.app/services`) ,
element:<Services></Services>
}
,
{
path:"/services-details/:id" ,
loader : async ({params}) => fetch(` https://lotus-pc-service-subrota22.vercel.app/services/${params.id}`) ,
element:<ServiceDetails></ServiceDetails>
} ,
{
path:"/review-edit/:id" ,
loader: async ({params}) => fetch(` https://lotus-pc-service-subrota22.vercel.app/my-reviews/${params.id}`) ,
element:<MyReviewUpdate></MyReviewUpdate>
}
, {
path:"*" , element:<Error></Error>
}
]}
])