export type User={
    fName:string,
    lName:string,
    email:string,
    password:string,
    phone:string
}

type Action = {
    type: 'CREATE' | 'REMOVE'| 'UPDATE'|'GET'|"ELSE",
    data: Partial<User> 
}
export const userReducer=(state: User, action: Action):User => {

    switch (action.type){
        case'CREATE':
        const {fName,password}=action.data as Partial<User>
        return {
            fName:fName||"",
            lName:'',
            email:'',
            password:password||"",
            phone:''
        }
        case 'UPDATE':
            return {
                fName:state.fName,
                lName: action.data.lName || state.lName,
                password :state.password,
                email: action.data.email || state.email,
                phone: action.data.phone || state.phone,
                // ...state,
                // ...action.data

            }
        default:
            return state
    }
}

