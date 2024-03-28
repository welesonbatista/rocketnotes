import { createContext, useContext, useState } from "react"
import { api } from '../services/api'
export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})
    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data
            api.defaults.headers.authorization = 'Bearer ${ token }'
            setData({ user, token })
            // console.log(user, token)
        } catch (error) {
            if (error.response) {
                alert(error.response.message)
            } else {
                alert("Nao foi possível entrar")
            }
        }

    }

    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth() {
    const context = useContext(MyContext)

    return context
}
export { AuthProvider, useAuth }