const initialState = {
    currentChoice: 'Моя страница',
    mainList: [
        'Моя страница', 'Пользователи', 'Сообщения'
    ],
    mainListLinks: [
        '/my_page', '/users', '/dialogs'
    ]
}

const sidebarChange = (state = initialState, action) => {
    if(action.type === 'SET_CURRENT_CHOICE') {
        return {
            ...state,
            currentChoice: action.payload
        }
    }
    return state
}

export default sidebarChange