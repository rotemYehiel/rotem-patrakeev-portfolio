const initialState = {
    isCvModalOpen: false,
    isMenuOpen: false,
}
export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGAL_CV_MODAL':
            return {
                ...state,
                isCvModalOpen: !state.isCvModalOpen
            }
        case 'TOGGAL_MENU':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }

        default:
            return state;
    }
}