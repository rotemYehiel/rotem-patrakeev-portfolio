import getDeveloper from '../services/DataService'

export function loadDeveloper() {
    return async dispatch => {
        const developerDetails = await getDeveloper();
        dispatch({ type: 'SET_DEVELOPER', developerDetails })
    }
}



