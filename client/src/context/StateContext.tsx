import { ReactNode, createContext, useContext } from "react"

type StateContextProviderProps = {
    children: ReactNode
}
type User = {
    email: string,
    username: string
}
type Login = (user: User) => void
type Logout = () => void


let auth: User = {
    email: '',
    username: ''
}

const login: Login = (user) => {
    auth = {...user}
}

const logout: Logout = () => {
    auth = {
        email: '',
        username: ''
    }
}

const UserContext = createContext({
    auth: {
        email: '',
        username: ''
    },
    login,
    logout
})

export const StateContext = ({children} : StateContextProviderProps) => {    

    return <UserContext.Provider value={{
        auth,
        login,
        logout
    }}>{children}</UserContext.Provider>
}

export const useStateContext = () => useContext(UserContext)