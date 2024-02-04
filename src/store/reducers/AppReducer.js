const initialState = {
  isMenuOpen: false,
};
export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGAL_MENU":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    default:
      return state;
  }
}
