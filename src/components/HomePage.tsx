import { createContext, useReducer, useState } from "react"
import { User, userReducer } from "./reducer/user"
import Login from "./Login"
import UserNameAvatar from "./UserName+Avatar";
import { Box } from "@mui/material";
import Update from "./Update";


    export type UserContextType = {
        user: User;
        userDispatch: React.Dispatch<any>; // Action typing can be more specific
      };
      
     export const UserContext = createContext<UserContextType | null>(null); // יש להחזיר null במקרה שאין קונטקסט


     const HomePage=()=>{
 
 
    const initialUser:User={
    fName:"ruti",
    lName:"",
    email:"",
    password:"1234",
    phone:"" 
  }
const [loginSuccess, setLoginSuccess] = useState(false); // מצב התחברות

const [user,userDispatch]=useReducer(userReducer,initialUser)

  const handleLoginSuccess = () => {
    setLoginSuccess(true); 
  };

   

    
    
    return(<>

<h1>HOME</h1>

    <Box
      sx={{
        position: "fixed",
        top: 5, 
        left: 5
      }}>
        <UserContext.Provider value={{ user, userDispatch }}>

        {loginSuccess===false && <Login onLoginSuccess={handleLoginSuccess}></Login> }
        
        {loginSuccess && <UserNameAvatar></UserNameAvatar>}

        <div></div>
        {loginSuccess && <Update></Update>}


        </UserContext.Provider>
</Box>

{/* {user.firstName}
{user.lastName}
{user.email}
{user.password}
{user.addres}
{user.phone} */}

    </>)

}
export default HomePage