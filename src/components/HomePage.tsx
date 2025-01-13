import { createContext, Dispatch, SetStateAction, useReducer, useState } from "react"
import { initialUser, User, userReducer } from "./reducer/user"
import Login from "./Login"
import UserNameAvatar from "./UserName+Avatar";
import { Box } from "@mui/material";
import Update from "./Update";


export type UserContextType = {
  user: User;
  userDispatch: React.Dispatch<any>; // Action typing can be more specific
};

export const UserContext = createContext<UserContextType | null>(null); // יש להחזיר null במקרה שאין קונטקסט
export const IdContext = createContext<[Number, Dispatch<SetStateAction<Number>>]>([0, () => { },]);


const HomePage = () => {


  
  const [loginSuccess, setLoginSuccess] = useState(false); // מצב התחברות
  const [id, setId] = useState<Number>(0)

  const [user, userDispatch] = useReducer(userReducer, initialUser)

  const handleLoginSuccess = () => {
    
    console.log("ttttttttttttttttttttttttttttttttttttttttttttttttttttt")
    setLoginSuccess(true);
    console.log("showUpdate:", loginSuccess);

  }


  return (<>

    <h1>HOME</h1>

    <Box
      sx={{
        position: "fixed",
        top: 10,
        left: 5
      }}>
      <UserContext.Provider value={{ user, userDispatch }}>
        <IdContext.Provider value={[id, setId]}>
          {!loginSuccess&& <Login onLoginSuccess={handleLoginSuccess}></Login>}

          {loginSuccess && <UserNameAvatar/>}

          <div></div>
          {/* {loginSuccess && <Update></Update>} */}

        </IdContext.Provider>
      </UserContext.Provider>
    </Box>

  

  </>)

}
export default HomePage