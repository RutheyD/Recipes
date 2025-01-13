import {  FormEvent, useContext, useRef, useState } from "react"
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
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  
  const Login = ({ onLoginSuccess }: {onLoginSuccess:Function}) => {



const fNameRef=useRef<HTMLInputElement>(null)
const passwordRef=useRef<HTMLInputElement>(null)

const context=useContext(UserContext)
const [id, setId] = useContext(IdContext)
const [logIn, setLogIn] = useState(false);
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
// const [user, setUser] = useState({})
let status='';
const handleSubmit=async (e: FormEvent)=>{
  e.preventDefault()
    logIn?status="login":status="register"
     
  try {
      const res = await axios.post(`http://localhost:3000/api/user/${status}`, {
          firstName: fNameRef.current?.value,
          password: passwordRef.current?.value
      })

      console.log(res);
      setId(res.data.user?.id||res.data.userId)
      // res.data.user.id?setId(res.data.user.id):setId(res.data.userId)
      // const userId = res.data.user?.id || res.data.userId;
      // if (!userId) {
      //   throw new Error("User ID is missing in the response");
      // }
      // setId(userId);
      context?.userDispatch({
        type: 'CREATE',
        data: {
          firstName: fNameRef.current?.value,
          password: passwordRef.current?.value,
        }
      }) 
      
onLoginSuccess()
    }
   catch (e:any) {
    
      if (e.status === 401||e.response && e.response === 401 || e.response === 400)
         if(status==="login")
        alert('מייל או סיסמא לא תקינים')
        
        else
          alert('בעיה בupdate')
      console.log(e);

  }

   handleClose()
   setLogIn(false)
   
  }
  // if (context)  
  //   if(context.user.fName === fNameRef.current?.value && context.user.password ===passwordRef.current?.value)
  //       {  context.userDispatch({ type: 'CREATE', data: { fName: fNameRef.current?.value||'',password:passwordRef.current?.value||''} })
  //        onLoginSuccess()
  //       }
  // const handleLogin = async (e: FormEvent) => {
//   e.preventDefault()
//   try {
//       const res = await fetch('http://localhost:3000/api/user/login',
//           {
//               method: 'POST',
//               body: JSON.stringify({
//                   fName: fNameRef.current?.value,
//                   password: passwordRef.current?.value
//               }),
//               headers: { 'Content-Type': 'application/json' }
//           }
//       )
//       console.log(res);
//       if (res.status === 401) { alert('מייל  או סיסמא לא נכונים') }
//       else if (!res.ok) { throw new Error(`fetch error ${res.status}`) }
//       const data = await res.json()
//       console.log(data);
//       setUser(data.user)
// onLoginSuccess()
//   } catch (e) {
//       console.log(e);

//   }

  // try {
  //     const res = await axios.post('http://localhost:3000/api/user/login', {
  //         name: fNameRef.current?.value,
  //         password: passwordRef.current?.value
  //     }
  //         // ,{
  //         //     headers: { 'user-id': user?.id }
  //         // }
  //     )

  //     console.log(res);
  //     setUser(res.data.user)
  // } catch (e) {
  //     if (e.status === 401)
  //         alert('מייל או סיסמא לא תקינים')
  //     console.log(e);

  // }


    return(<>
    <Button onClick={()=>{setLogIn(true);setOpen(true);}}>Login</Button>
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
            <TextField  type="text"id="first_name" label="First name" variant="outlined" inputRef={fNameRef}/>
           <div></div>
            <TextField type="password"id="pasword" label="Password" variant="outlined" inputRef={passwordRef}/>
             {/* <input name="fName" placeholder="first name" ref={fNameRef}/> */}
             {/* <input  name="password" placeholder="password" ref={passwordRef}/> */}
             <div></div>
             <Button fullWidth  type="submit"  variant="contained" endIcon={":)"}>send</Button>
     
            </Typography>
            </form>
          </Box>
        </Modal>)
    
  
             }
    
    </>)
  }
export default Login
