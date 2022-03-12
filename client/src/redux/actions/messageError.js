export const setMessageError = ({errorExist, errorMessage}) => ({
    type: 'SET_ERROR_MESSAGE',
    payload: {
        exist: errorExist,
        message: errorMessage
    }
})