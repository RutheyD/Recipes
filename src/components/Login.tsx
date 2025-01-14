import { FormEvent, useContext, useRef, useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IdContext, UserContext } from "./HomePage";
import TextField from '@mui/material/TextField';
import axios from "axios";

// import SendIcon from '@mui/icons-material/Send';
// import DeleteIcon from '@mui/icons-material/Delete';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: "linear-gradient(90deg,rgb(152, 214, 233),rgb(248, 163, 253))", // מעבר צבעים
  // bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Login = ({ onLoginSuccess }: { onLoginSuccess: Function }) => {



  const fNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const context = useContext(UserContext)
  const [id, setId] = useContext(IdContext)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await axios.post(`http://localhost:3000/api/user/login`, {
        firstName: fNameRef.current?.value,
        password: passwordRef.current?.value
      })

      console.log(res);
      setId(res.data.user?.id || res.data.userId)

      context?.userDispatch({
        type: 'CREATE',
        data: {
          firstName: fNameRef.current?.value,
          password: passwordRef.current?.value,
        }
      })

      onLoginSuccess()
    }
    catch (e: any) {

      if (e.status === 401 || e.response && e.response === 401 || e.response === 400)
        alert('מייל או סיסמא לא תקינים')

      console.log(e);

    }

    handleClose()

  }

  return (<>

    <Button onClick={handleOpen}>LogIn</Button>
    {open &&
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
                <TextField type="text" id="first_name" label="First name"  variant="outlined"sx={{ marginBottom: 2 }} inputRef={fNameRef} />
                <div></div>
                <TextField type="password" id="pasword" label="Password" variant="outlined"sx={{ marginBottom: 2 }} inputRef={passwordRef} />
                <div></div>
                <Button type="submit" variant="contained"sx={{
                    backgroundColor: "rgb(218, 106, 224)", // ורוד
                    color: "#fff", // טקסט בלבן
                    "&:hover": {
                      backgroundColor: "rgb(94, 203, 236)", // גוון כהה יותר
                    },
                    // (90deg,rgb(152, 214, 233),rgb(248, 163, 253))"
                  }} endIcon={":)"}>send</Button>

              </Typography>
            </form>
          </Box>
        </Modal>)


    }

  </>)
}
export default Login
