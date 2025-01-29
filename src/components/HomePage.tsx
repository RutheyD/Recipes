import { createContext, Dispatch, SetStateAction, useReducer, useState } from "react"
import { initialUser, User, userReducer } from "./reducer/user"
import { Box } from "@mui/material";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import UserNameAvatar from "./user/UserName+Avatar";
import Update from "./user/Update";
import RecipeList from "./recipes/RecipesList";
import AddRecipe from "./recipes/AddRecipe";



export type UserContextType = {
  user: User;
  userDispatch: React.Dispatch<any>; // Action typing can be more specific
};

export const UserContext = createContext<UserContextType | null>(null); // יש להחזיר null במקרה שאין קונטקסט
export const IdContext = createContext<[Number, Dispatch<SetStateAction<Number>>]>([0, () => { },]);


const HomePage = () => {


  
  const [loginSuccess, setLoginSuccess] = useState(false); // מצב התחברות
  const [signUpSuccess, setSignUpSuccess] = useState(false); // מצב התחברות
  const [id, setId] = useState<Number>(0)

  const [user, userDispatch] = useReducer(userReducer, initialUser)

  const handleLoginSuccess = () =>  setLoginSuccess(true);
  
  const handleSignUpSuccess = () => setSignUpSuccess(true);
 

  return (<>
 <Box
      sx={{
        position: "fixed",
        top: 10,
        left: 5
      }}>
      <UserContext.Provider value={{ user, userDispatch }}>
        <IdContext.Provider value={[id, setId]}>
       
        {(!loginSuccess&&!signUpSuccess)? 
          <>
            <Login onLoginSuccess={handleLoginSuccess} />
            <SignUp onSignUpSuccess={handleSignUpSuccess}/>
            
            </>
            
           : 
            <>
              <UserNameAvatar />
              <Update />
              <AddRecipe/>
            </>
          }

      

        </IdContext.Provider>
      </UserContext.Provider>
    </Box>

{/* <h1>our recipes:</h1>  
<RecipeList/> */}

  </>)

}
export default HomePage