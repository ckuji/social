import React from "react"
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook"

export const AuthContentReg = () => {
    const {error, request, clearError} = useHttp()
    const message = useMessage()
    const [form, setForm] = React.useState({
        email: '', password: '', name: ''
    })

    React.useEffect( () => {
        message(error)
        clearError()
    }, [error, clearError] )

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/registration', 'POST', {...form})
            message(data.message)
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
            <div>
                <div>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={changeForm}
                    />
                    <label htmlFor="name">Name</label>
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