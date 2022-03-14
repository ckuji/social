import {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useParams} from "react-router-dom";
import {useMessage} from "../hooks/message.hook";
import {useSelector} from "react-redux";
import {ErrorMessage} from "./ErrorMessage";

export const Dialog = () => {
    const [textValue, setTextValue] = useState('')
    const [messageList, setMessageList] = useState([])
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const userId = useParams().id
    const message = useMessage()
    const errorState = useSelector(({messageError}) => messageError)

    const onChangeHandler = (event) => {
        setTextValue(event.target.value)
    }

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

    useEffect(async () => {
        try {
            const fetched = await request(`/api/messages/${userId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setMessageList(fetched.data)
            console.log(messageList)
        } catch (e) {
            message(e.message)
        }
    }, [onClickSender])

    return (
        <>
            <div className="dialogWrapper">
                {
                    messageList.map((item, index) =>
                        <div key={`${item}_${index}`}>
                            {item.text}
                        </div>
                    )
                }
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
            <button
                className="dialogButton"
            >
                Получить
            </button>
            {
                errorState.errorExist && <ErrorMessage message={errorState.message}/>
            }
        </>
    )
}