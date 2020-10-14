export const todoReducer = (state, action) => {
    switch (action.type){
        case 'GET_TODO':
            return action.todos;
        case 'ADD_TODO':
            return [
                ...state,
                {
                    title: action.title,
                    note: action.note,
                    id: action.id
                }
            ];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};