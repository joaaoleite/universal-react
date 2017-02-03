import axios from 'axios'

function url(path){ return 'http://localhost:8080'+path }

export function fetchMe(){

    return (dispatch)=>{
		dispatch({type: "FETCHING_ME"})
        axios.get(url('/api/me'))
            .then((response)=>{
                dispatch({type: "FETCH_ME_FULFILLED", payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: "FETCH_ME_REJECTED", payload: err})
            })
    }
}

export function requireAuth(nextState, replace, done) {
	axios.get(url('/api/me'))
		.then((res)=>{
			if(res.data && res.data.id) done()
			else window.location.href = '/auth/google'
		})
		.catch((err)=>{
			window.location.href = '/auth/google'
		})
}
