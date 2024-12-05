
export const reducer = (state, action) => {
    if(action.type == 'usertype') {
        return {
            ...state,
            userType: state.userType == 'guest' ? 'admin' : 'guest'
        }
    }
    else if (action.type == 'theme') {
        if(state.theme == 'light') {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
        return {
            ...state, 
            theme: state.theme == 'light' ? 'dark' : 'light'
        }
    }

    return state;
}

// export const intialStates = {
//     theme: 'light',
//     userType: 'guest'
// };