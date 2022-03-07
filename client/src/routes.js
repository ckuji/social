import {Routes, Route, Navigate} from 'react-router-dom'
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";
import {LinksPage} from "./pages/LinksPage";

export const mainRoute = (isAuthenticated) => {
    if(isAuthenticated) {
        return (
            <Routes>
                <Route path="/create" element={ <CreatePage />  } />

                <Route path="/links" element={ <LinksPage /> } />

                <Route path="/detail/:id" element={ <DetailPage /> } />

                <Route path="*" element={ <CreatePage /> } />
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
