export const filterReducer = (state, action) => {
    switch (action.type){
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.search
            }
        default:
            return state;
    }
}