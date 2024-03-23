import { createContext, useContext } from "react"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ name: "weleson", email: "well@emmail,com" }}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth() {
    const context = useContext(MyContext)

    return context
}
export { AuthProvider, useAuth }