import DataService from '../services/DataService'

export function loadDeveloper() {
    return async dispatch => {
        const developerDetails = await DataService.getDeveloper();
        dispatch({ type: 'SET_DEVELOPER', developerDetails })
    }
}



