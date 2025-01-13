export type User ={
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    address:string,
    phone:string
}
export const initialUser:User= {
    firstName: "",
    lastName:"",
    email:"",
    password:"",
    address:"",
    phone:"",
   
}
type Action = {
    type: 'CREATE' | 'REMOVE'| 'UPDATE'|'GET'|"ELSE",
    data: Partial<User> 
}
export const userReducer=(state: User, action: Action):User => {

    const {firstName,password}=action.data as Partial<User>
    switch (action.type){
        case'CREATE':
        return {
            firstName:firstName||"",
            lastName:'',
            email:'',
            password:password||"",
            address:'',
            phone:''
        }
        case 'UPDATE':
            return {
                firstName: action.data.firstName ||state.firstName,
                lastName: action.data.lastName || state.lastName,
                email: action.data.email || state.email,
                password :state.password,
                address:action.data.address||state.address,
                phone: action.data.phone || state.phone,
                // ...state,
                // ...action.data

            }
        default:
            return state
    }
}

