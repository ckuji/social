import {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useParams} from "react-router-dom";
import {useMessage} from "../hooks/message.hook";
import {useSelector} from "react-redux";
import {ErrorMessage} from "./ErrorMessage";

export const Dialog = () => {
    const [textValue, setTextValue] = useState('')
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const userId = useParams().id
    const message = useMessage()
    const errorState = useSelector(({messageError}) => messageError)

    const onChangeHandler = (event) => {
        setTextValue(event.target.value)
    }

    useEffect(async () => {
        try {
            const fetched = await request('/api/dialog_to_user/', 'GET', {userId}, {
                Authorization: `Bearer ${token}`
            })
        } catch (e) {

        }
    }, [])

    const onClickSender = async () => {
        try {
            const data = await request(`/api/dialog_to_user/${userId}`, 'POST', {textValue}, {
                Authorization: `Bearer ${token}`
            })
            message(data.message)
            setTextValue('')
        } catch (e) {
            message(e.message)
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
            {
                errorState.errorExist && <ErrorMessage message={errorState.message} />
            }
        </>
    )
}