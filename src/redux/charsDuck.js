import axios from 'axios'


//Constants

let initialData = {
    fetching: false,
    array:[],
    current:{}
}

let URL = "https>//rickandmortyapi.com/api/character"

let GET_CHARACTERS = "GET_CHARACTERS"
let GET_CHARACTERS_SUCESS = "GET_CHARACTERS_SUCESS"
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"

//reducer

export default function reducer(state=initialData, action){
    switch(action.type){
        case GET_CHARACTERS:
        case GET_CHARACTERS_SUCESS:
        case GET_CHARACTERS_ERROR:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//actions *thunks*

export let getCharactersAction = () => (dispatch, getState) => {
    return axios.get(URL)
    .then(res => {
        dispatch({
            type: GET_CHARACTERS_SUCESS,
            payload: res.data.results
        })
    })
}
