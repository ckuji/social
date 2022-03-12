const initialState = {
    errorExist: false,
    message: ''
}

const messageError = (state = initialState, action) => {
    if(action.type === 'SET_ERROR_MESSAGE') {
        return {
            ...state,
            errorExist: action.payload.exist,
            message: action.payload.message
        }
    }
    return state
}

export default messageError