import {useCallback} from "react";
import {setMessageError} from "../redux/actions/messageError";
import {useDispatch} from "react-redux";

export const useMessage = () => {
    const dispatch = useDispatch()

    return useCallback(text => {
        if (text) {
            dispatch(setMessageError({errorExist: true, errorMessage: text}))
            window.setTimeout(function () {
                dispatch(setMessageError({errorExist: false, errorMessage: ''}))
            }, 2000)
        }
    }, [])
}