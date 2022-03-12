import {BrowserRouter} from 'react-router-dom'
import {mainRoute} from "./routes"
import {AuthContext} from "./context/AuthContext"
// import 'materialize-css'
import {useAuth} from "./hooks/auth.hook"
import {Loader} from "./components/Loader"

function App() {
    const {token, userId, login, logout, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = mainRoute(isAuthenticated)

    if(!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider value={
            {token, userId, login, logout, isAuthenticated}
        }>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
