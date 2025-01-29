import { Outlet } from "react-router"
import NavBar from "./NavBar"

const AppLayout = () => {

    return (<>
        
           
            
                <NavBar />
                <div></div>
                <Outlet />
                <div></div>
           
        
    </>)
}

export default AppLayout