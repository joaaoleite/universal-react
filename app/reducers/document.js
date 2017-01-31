export default function reducer(state={
	documents : [],
    fetching: false,
    fetched: false,
    error: null
}, action){

	/* GET DOCUMENTS */
    if(action.type === "FETCHING_DOCUMENTS")
        return {...state, fetching: true}
    if(action.type === "FETCH_DOCUMENTS_FULFILLED")
        return {
            ...state,
            documents : action.payload,
            fetching: false,
            fetched: true,
            error: null
        }
    if(action.type === "FETCH_DOCUMENTS_REJECTED")
        return {...state, fetching: false, error: action.payload}

    return state
}
