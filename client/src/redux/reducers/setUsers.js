const initialState = {
    users: []
}

const setUsers = (state = initialState, action) => {
    if (action.type === 'SET_USERS') {
        return {
            ...state,
            users: action.payload
        }
    }
    return state
}

export default setUsers