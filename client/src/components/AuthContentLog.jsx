import React, {useContext} from "react"
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook"
import {AuthContext} from "../context/AuthContext";

export const AuthContentLog = () => {
    const auth = useContext(AuthContext)
    const {error, request, clearError} = useHttp()
    const message = useMessage()
    const [form, setForm] = React.useState({
        email: '', password: ''
    })

    React.useEffect( () => {
        message(error)
        clearError()
        console.log(error)
    }, [error, clearError] )

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <div className="authContainer-content">
            <div>
                <div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={changeForm}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={changeForm}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
            </div>
            <button
                onClick={registerHandler}
            >
                Отправить
            </button>
        </div>
    )
}