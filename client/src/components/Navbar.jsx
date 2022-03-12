import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import {useNavigate} from 'react-router-dom'

export const Navbar = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }

    return (
        <nav>
            <div>
                <a href="#">Logo</a>
                <ul>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>

    )
}