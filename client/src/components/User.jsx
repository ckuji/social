import {useNavigate} from "react-router-dom";


export const User = ({name, userId}) => {
    const history = useNavigate()

    const toDialog = () => {
        history(`/dialog_to_user/${userId}`)
    }

    return (
        <div className="userWrapper">
            <div className="avatarWrapper">
                <img src="data:image/png;base64,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" alt="Загрузка"/>
            </div>
            <div className="userContent">
                <div className="userWrapper-status">
                    {name}
                </div>
                <div className="userWrapper-buttons">
                    <button
                        onClick={toDialog}
                        className="userButton"
                    >
                        Отправить ссообщение
                    </button>
                    <button
                        className="userButton"
                    >
                        Добавить в друзья
                    </button>
                </div>
            </div>
        </div>
    )
}
