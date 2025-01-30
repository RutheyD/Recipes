import { useState } from "react"
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import UserNameAvatar from "./user/UserName+Avatar";
import Update from "./user/Update";
import { Grid2 as Grid } from "@mui/material";
const HomePage = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const handleLoginSuccess = () => setLoginSuccess(true);
  const handleSignUpSuccess = () => setSignUpSuccess(true);
  return (<>
    <h1>Recipes Project</h1>
    <Grid container>
      <Grid sx={{
        position: "fixed",
        top: 5,
        left: 5
      }}>
        {(!loginSuccess && !signUpSuccess) ?
          <>
            <Login onLoginSuccess={handleLoginSuccess} />
            <SignUp onSignUpSuccess={handleSignUpSuccess} />

          </>
          :
          <>
            <UserNameAvatar />
            <Update />
          </>
        }

      </Grid>
    </Grid>
  </>)

}
export default HomePage