import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { FormEvent, useContext, useRef, useState } from "react";
import axios from "axios";
import { IdContext, UserContext } from "../HomePage";




// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     background: "linear-gradient(90deg,rgb(152, 214, 233),rgb(248, 163, 253))", // מעבר צבעים
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: "linear-gradient(90deg,rgb(179, 179, 179),rgb(253, 220, 255))", // מעבר צבעים
    // bgcolor: 'background.paper',
    border: '3px solidrgb(103, 39, 107) ',
    borderRadius: '16px',
    boxShadow: 24,
    p: 4,
  };
const SignUp = ({ onSignUpSuccess }: {onSignUpSuccess:Function}) => {

    const fNameRef=useRef<HTMLInputElement>(null)
    const lNameRef=useRef<HTMLInputElement>(null)
    const passwordRef=useRef<HTMLInputElement>(null)
    
    const context=useContext(UserContext)
    const [id, setId] = useContext(IdContext)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit=async (e: FormEvent)=>{
      e.preventDefault()
         
      try {
          const res = await axios.post(`http://localhost:3000/api/user/register`, {
              firstName: fNameRef.current?.value,
              lastName:lNameRef.current?.value,
              password: passwordRef.current?.value
          })
    
          console.log(res);
          setId(res.data.userId)
          
          context?.userDispatch({
            type: 'CREATE',
            data: {
                firstName: fNameRef.current?.value,
                lastName:lNameRef.current?.value,
              password: passwordRef.current?.value,
            }
          }) 
          
    onSignUpSuccess()
        }
       catch (e:any) {
        
          if (e.status === 401 || e.status === 400)           
              alert('כבר קיים כזה משתמש')
          console.log(e);
    
      }
    
       handleClose()
       
      }
      
    
        return(<>
        <Button onClick={handleOpen}>SignUp</Button>
        {open&&
        (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <form onSubmit={handleSubmit}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                <TextField  type="text"id="first_name" label="First name" variant="outlined"sx={{ marginBottom: 2 }} inputRef={fNameRef}/>
                <div></div>
                <TextField  type="text"id="last_name" label="Last name" variant="outlined"sx={{ marginBottom: 2 }} inputRef={lNameRef}/>
               <div></div>
                <TextField type="password"id="pasword" label="Password" variant="outlined"sx={{ marginBottom: 2 }} inputRef={passwordRef}/>
                 <div></div>
                 <Button  type="submit"  variant="contained"
                 sx={{
                    backgroundColor: "rgb(218, 106, 224)", // ורוד
                    color: "#fff", // טקסט בלבן
                    "&:hover": {
                      backgroundColor: "rgb(14, 117, 148)", // גוון כהה יותר
                    }, }}
                 endIcon={":)"}>send</Button>
         
                </Typography>
                </form>
              </Box>
            </Modal>)
        
      
                 }
        
        </>)



}
export default SignUp;
    
   
  
  