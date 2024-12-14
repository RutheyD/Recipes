import {  useContext, useRef, useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UserContext } from "./homePage";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type LoginProps = {
    onLoginSuccess: () => void; // טיפוס לפונקציה שמעדכנת את ההצלחה
  };
  
  const Login = ({ onLoginSuccess }: LoginProps) => {



// const [loginButten,setLoginButten]=useState(false)
const fNameRef=useRef<HTMLInputElement>(null)
const passwordRef=useRef<HTMLInputElement>(null)

const context=useContext(UserContext)

const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
if (!context) {
    throw new Error("UserContext is not available. Make sure it's provided at a higher level.");
  }
const { userDispatch } = context;

const handleSubmit=()=>{
    
    if(context.user.fName === fNameRef.current?.value && 
        context.user.password ===passwordRef.current?.value)
       { {userDispatch({ type: 'CREATE', 
            data: { fName: fNameRef.current?.value||'',
                 password:passwordRef.current?.value||''} })
 
            
            }
            onLoginSuccess()
        
        }
            // else   { {userDispatch({ type: 'ELSE', 
            // data: { fName: fNameRef.current?.value||'',
            //      password:passwordRef.current?.value||''} })}}
 
            
                


}

    return(<>
    {/* <button onClick={()=>setLoginButten(!loginButten)}>Login</button> */}
    <Button onClick={handleOpen}>Login</Button>
    {open&&
    (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
             
             <input type="text" name="fName" placeholder="first name" ref={fNameRef}/>
             <input type="password" name="password" placeholder="password" ref={passwordRef}/>
             
             <Button onClick={handleSubmit}  variant="contained" >submit</Button>
         
            </Typography>
            
          </Box>
        </Modal>)
    
  
    }
    
    </>)
}
export default Login