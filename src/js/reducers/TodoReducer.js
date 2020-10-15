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
                    id: action.id,
                    checked: action.checked
                }
            ];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        case 'EDIT_TODO':
            return state.map((todo) =>{
                if (todo.id === action.id){
                    return { ...todo, ...action.updates }
                } else {
                    return todo
                }
            })
        default:
            return state;
    }
};