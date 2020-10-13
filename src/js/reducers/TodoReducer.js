export const todoReducer = (state, action) => {
    switch (action.type){
        case 'GET_TODO':
            return action.todos;
        case 'ADD_TODO':
            return [
                ...state,
                {
                    title: action.title,
                    note: action.note
                }
            ];
        default:
            return state;
    }
};