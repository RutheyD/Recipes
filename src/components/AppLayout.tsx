import { Outlet } from "react-router"
import NavBar from "./NavBar"
import HomePage from "./HomePage"
import { initialUser, User, userReducer } from "./reducer/user";
import { createContext, Dispatch, SetStateAction, useReducer, useState } from "react";

export type UserContextType = {
    user: User;
    userDispatch: React.Dispatch<any>;
};
export const IdContext = createContext<[Number, Dispatch<SetStateAction<Number>>]>([0, () => { },]);
export const UserContext = createContext<UserContextType | null>(null);
const AppLayout = () => {

    const [user, userDispatch] = useReducer(userReducer, initialUser)
    const [id, setId] = useState<Number>(0)

    return (<>

        <UserContext value={{ user, userDispatch }}>
            <IdContext value={[id, setId]}>
                <HomePage />

                <NavBar />
                <div></div>
                <Outlet />
                <div></div>

            </IdContext >
        </UserContext>

    </>)
}

export default AppLayout