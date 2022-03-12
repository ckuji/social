import {useContext, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useParams} from "react-router-dom";

export const Dialog = () => {
    const [textValue, setTextValue] = useState('')
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const userId = useParams().id

    const onChangeHandler = (event) => {
        setTextValue(event.target.value)
    }

    const onClickSender = async () => {
        try {
            const data = await request(`/api/dialog_to_user/${userId}`, 'POST', {textValue}, {
                Authorization: `Bearer ${token}`
            })
            console.log(data)
        } catch (e) {
            console.log('Последняя ошибка')
        }
    }

    return (
        <>
            <div className="dialogWrapper">
                Диалог с пользователем
            </div>
            <textarea
                value={textValue}
                onChange={onChangeHandler}
                className="dialogInput"
            >

            </textarea>
            <button
                onClick={onClickSender}
                className="dialogButton"
            >
                Отправить
            </button>
        </>
    )
}