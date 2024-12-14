import { useContext } from "react"
import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { UserContext } from "./homePage";

const UserNameAvatar=() =>{

    const context=useContext(UserContext)
    let fName: string='';
    if(context)
       { fName=context.user.fName}
return(<>

<Box sx={{ display: "flex", alignItems: "center", marginBottom:"20px"}}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{fName[0]}</Avatar>      
      <Typography variant="h6">hello {fName}</Typography>
    </Box>
            
</>)


}
export default UserNameAvatar