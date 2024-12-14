import { Box, Button, Modal, Typography } from "@mui/material"
import { useContext, useRef, useState } from "react";
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
  
const Update=()=>{


    
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 const lastref = useRef<HTMLInputElement>(null)
 const emailref = useRef<HTMLInputElement>(null)
 const addressref = useRef<HTMLInputElement>(null)
 const phoneref = useRef<HTMLInputElement>(null)
 const context = useContext(UserContext);

 const updateUser=()=>{
    if (context) {
        context.userDispatch({type:'UPDATE',data: {
            
            lName:lastref.current?.value||'' ,
            email:emailref.current?.value|| '',  
            phone: phoneref.current?.value||''
    }})
    }
 }
    return(<>
    <Button onClick={handleOpen}>Update</Button>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
                        <input ref={lastref} placeholder="lastName" />
                        <br></br>
                        <input ref={emailref} placeholder="email" />
                        <br></br>
                        <input ref={addressref} placeholder="address" />
                        <br></br>
                        <input ref={phoneref} placeholder="phone" />
                        <br></br>
                        <Button onClick={updateUser} variant="contained" >Send</Button>
        </Typography>
        
    </Box>
    </Modal>
    </>)
}
export default Update