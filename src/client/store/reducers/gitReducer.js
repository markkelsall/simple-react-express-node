import { GIT_GET_GISTS, GIT_GET_GISTS_RESPONSE } from '../../actions/constants';

const initState = {
    list: [],
    loading: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case GIT_GET_GISTS:
            return Object.assign({}, state, {
                loading: true
            });
        case GIT_GET_GISTS_RESPONSE:
            return Object.assign({}, state, {
                loading: false,
                list: action.payload.list
            });

    default:
        return state;
    }
};
