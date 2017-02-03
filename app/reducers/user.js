export default function reducer(state={
	user : null,
    fetching: true,
    fetched: false,
    error: null
}, action){

	/* GET USER */
    if(action.type === "FETCHING_ME")
        return {...state, fetching: true}
    if(action.type === "FETCH_ME_FULFILLED")
        return {
            ...state,
            user : action.payload,
            fetching: false,
            fetched: true,
            error: null
        }
    if(action.type === "FETCH_ME_REJECTED")
        return {...state, fetching: false, error: action.payload, user:null}

    return state
}
