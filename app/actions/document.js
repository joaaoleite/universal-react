import axios from 'axios'

function url(path){ return 'http://localhost:8080'+path }

export function fetchDocuments(){

    return (dispatch)=>{
		dispatch({type: "FETCHING_DOCUMENTS"})
        axios.get(url('/api/documents'))
            .then((response)=>{
                dispatch({type: "FETCH_DOCUMENTS_FULFILLED", payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: "FETCH_DOCUMENTS_REJECTED", payload: err})
            })
    }
}
