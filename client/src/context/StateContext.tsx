import { ReactNode, createContext, useContext, useState } from "react"

type User = {
    email: string,
    username: string
}

type Login = (user: User) => void

type Props = {
    children: ReactNode
}

const Context = createContext({
    auth: {
        email: '',
        username: ''
    },
    login: auth: User,

})

export const StateContext = ({ children }: Props) => {

    const [ auth, setAuth ] = useState({})

    const login = (user: User) => {
        setAuth(user)
    }

    const logout = () => setAuth({})

    return (
        <Context.Provider
        value={{
            auth,
            login,
            logout
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)