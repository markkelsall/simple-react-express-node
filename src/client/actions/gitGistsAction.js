import { fetchGists } from '../api/githubGistsService';
import { GIT_GET_GISTS, GIT_GET_GISTS_RESPONSE } from './constants';

export const getGists = () => {
    return dispatch => {
        dispatch({
            type: GIT_GET_GISTS
        });
        fetchGists().then(response => {
            dispatch({
                type: GIT_GET_GISTS_RESPONSE,
                payload: {
                    list: response
                }
            })
        }).catch(error => {
            dispatch({
                type: GIT_GET_GISTS_RESPONSE,
                payload: {
                    list: []
                }
            })
        });
    }
};
