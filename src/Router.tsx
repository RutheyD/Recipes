import { createBrowserRouter } from "react-router";
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar";
import Person from "./components/Person";
import AppLayout from "./components/AppLayout";

export const myRouter = createBrowserRouter([
    {        
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children: [
            { path: '/', element: <NavBar /> },

            { path: 'ruti', element: <>my name is: ruti</> },

            {
                path: 'person/:name', element: <Person />
            },
            {
                path: 'UserPage', element: <UserPage />
            }
    
]
}
])


