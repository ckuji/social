import {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError] )

    const onChangeHandler = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const onRegisterHandler = async () => {
        try {
            const data = await request('/api/auth/registration', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }

    const onLoginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <div className="authContainer">
            <div className="row">
                <div className="input-field s12">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        className="validate"
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field s12">
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={form.password}
                        className="validate"
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <button
                className="waves-effect waves-light btn-small btn-authPage"
                onClick={onRegisterHandler}
            >
                Регистрация
            </button>
            <button
                className="waves-effect waves-light btn-small"
                onClick={onLoginHandler}
            >
                Войти</button>
        </div>
    )
}