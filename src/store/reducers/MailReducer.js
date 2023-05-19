const initialState = {
    isMsgSent: false
}
export default function MailReducer(state = initialState, action) {

    switch (action.type) {
        case 'TOGGALE_MSG_MODAL':
            return {
                ...state,
                isMsgSent: !state.isMsgSent
            }
        default:
            return state;
    }
}