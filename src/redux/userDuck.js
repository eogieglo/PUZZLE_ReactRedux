import { loginWithGoogle } from '../firebase'

//constanst
let initialData = {
    loggedIn: false,
    fetching: false
}

let LOGIN = "LOGIN"
let LOGIN_SUCESS = "LOGIN_SUCESS" 
let LOGIN_ERROR = "LOGIN_ERROR"

//reducer
export default function reducer(state = initialData, action){
    switch(action.type){
        case LOGIN_SUCESS:
            return {...state, fetching:false, ...action.payload }
        case LOGIN_ERROR:
            return {...state, fetching:false, error:action.payload }
        case LOGIN:
        default:
            return state
    }
}

//Funcion auxiliar

function saveStorage(storage){
    localStorage.storage = JSON.stringify(storage)
}

//action

export let doGoogleLoginAction = () => (dispatch, getState) => {
    dispatch({
        type: LOGIN
    })
    return loginWithGoogle()
        .then(user =>{
            dispatch({
                type: LOGIN_SUCESS,
                payload: { ...user }
            })
            saveStorage(getState)
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: LOGIN_ERROR,
                payload: err.message
            })       
        }) 
}