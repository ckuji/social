const initialState = {
    authCurrent: 0,
    authAll: [
        'Войти',
        'Зарегистрироваться'
    ]
}

const authChange = (state = initialState, action) => {
    if(action.type === 'CHANGE_AUTH_UNIT') {
        return {
            ...state,
            authCurrent: action.payload
        }
    }
    return state
}

export default authChange