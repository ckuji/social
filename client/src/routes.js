import {Routes, Route, Navigate} from 'react-router-dom'
import {AuthPage} from "./pages/AuthPage";
import {Main} from "./pages/Main";

export const mainRoute = (isAuthenticated) => {
    if(isAuthenticated) {
        return (
            <Routes>
                <Route path="*" element={ <Main /> } />
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="/" element={ <AuthPage /> } exact />

                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
        )
    }
}
