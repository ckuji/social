import {useSelector} from "react-redux";
import {AuthSidebar} from "../components/AuthSidebar";
import {AuthContent} from "../components/AuthContent";
import {ErrorMessage} from "../components/ErrorMessage";

export const AuthPage = () => {

    const authState = useSelector(({authChange}) => authChange)
    const errorState = useSelector(({messageError}) => messageError)

    // рефакторинг запросов

    const authUnits = authState.authAll
    const authCurrent = authState.authCurrent

    return (
        <div className="authContainer">
            <AuthSidebar
                authUnits={authUnits}
                authCurrent={authCurrent}
            />
            <AuthContent
                authCurrent={authCurrent}
            />
            {
                errorState.errorExist && <ErrorMessage message={errorState.message} />
            }
        </div>
    )
}