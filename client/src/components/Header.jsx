import {Navbar} from "./Navbar";
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";

export const Header = () => {
    const {isAuthenticated} = useContext(AuthContext)
    return (
        <div className="container-header">
            { isAuthenticated && <Navbar /> }
        </div>
    )
}