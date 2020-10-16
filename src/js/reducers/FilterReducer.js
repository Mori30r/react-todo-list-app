export const filterReducer = (state, action) => {
    switch (action.type){
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.search
            }
        case 'SET_SORT':
            return {
                ...state,
                sort: action.sort
            }
        default:
            return state;
    }
}