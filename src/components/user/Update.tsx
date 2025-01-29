import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { FormEvent, useContext, useRef, useState } from "react";
import axios from "axios";
import { IdContext, UserContext } from "../HomePage";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   background: "linear-gradient(90deg,rgb(152, 214, 233),rgb(248, 163, 253))", // מעבר צבעים

//   // bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };
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
const Update = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const firstref = useRef<HTMLInputElement>(null)
  const lastref = useRef<HTMLInputElement>(null)
  const emailref = useRef<HTMLInputElement>(null)
  const addressref = useRef<HTMLInputElement>(null)
  const phoneref = useRef<HTMLInputElement>(null)
  const context = useContext(UserContext);
  const [id]=useContext(IdContext)

  const handleSubmit =  async (e: FormEvent)=> {
    e.preventDefault()
    try {
      console.log(id);
  const res = await axios.put('http://localhost:3000/api/user', {
      firstName: firstref.current?.value,
      lastName: lastref.current?.value ,
                  mail: emailref.current?.value,
                  address: addressref.current?.value,
                  phone: phoneref.current?.value,
   }, {
          headers: { 'user-id': id+"" }
      }
   )
   console.log(res);

   context?.userDispatch({
    type: 'UPDATE', data: {
      firstName: firstref.current?.value || '',
      lastName: lastref.current?.value || '',
      email: emailref.current?.value || '',
      address: addressref.current?.value,
      phone: phoneref.current?.value || ''
    }
  })
      
  }
  catch (e:any) {
      if(e.status === 401||e.response===403||e.response ===4000)
          alert("User Not found")
      console.log(e);
  }
    handleClose()
 
  }

  return (<>
    <Button onClick={handleOpen} >Update</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <form onSubmit={handleSubmit}>
        <Typography id="modal-modal-title" variant="h6" component="h2">

          <TextField type="text" id="f" label="First name" variant="outlined" inputRef={firstref} />
          <div></div>
          <TextField type="text" id="l" label="Last name" variant="outlined" inputRef={lastref} />
          <div></div>
          <TextField type="email" id="e" label="Email" variant="outlined" inputRef={emailref} />
          <div></div>
          <TextField type="text" id="a" label="Address" variant="outlined" inputRef={addressref} />
          <div></div>
          <TextField type="text" id="p" label="Phone" variant="outlined" inputRef={phoneref} />
          <div></div>


          <Button type="submit" variant="contained"sx={{
                    backgroundColor: "rgb(218, 106, 224)", // ורוד
                    color: "#fff", // טקסט בלבן
                    "&:hover": {
                      backgroundColor: "rgb(14, 117, 148)", // גוון כהה יותר
                    },
                  }} >Save</Button>
         
          
        </Typography>
 </form>
      </Box>
    </Modal>


  </>)
}
export default Update