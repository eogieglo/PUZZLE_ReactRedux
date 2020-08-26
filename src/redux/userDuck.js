import { loginWithGoogle, signOutGoogle } from '../firebase'

//constanst
let initialData = {
    loggedIn: false,
    fetching: false
}

let LOGIN = "LOGIN"
let LOGIN_SUCESS = "LOGIN_SUCESS" 
let LOGIN_ERROR = "LOGIN_ERROR"

let LOG_OUT = "LOG_OUT"

//reducer
export default function reducer(state = initialData, action){
    switch(action.type){
        case LOG_OUT:
            return { ...initialData }
        case LOGIN_SUCESS:
            return {...state, fetching:false, ...action.payload, loggedIn:true }
        case LOGIN_ERROR:
            return {...state, fetching:false, error: action.payload }
        case LOGIN:
            return { ...state, fetching:true }
        default:
            return state
    }
}

//Funcion auxiliar

function saveStorage(storage){
    localStorage.storage = JSON.stringify(storage)
}

//action

export let logOutAction = () => (dispatch, getState) => {
    signOutGoogle()
    dispatch({
        type: LOG_OUT,
    })
    localStorage.removeItem('storage')
}

//No me funciono, pero decidi avanzar con el resto

export let restoreSessionAction = () => dispatch  => {
    let storage  = localStorage.getItem('storage')
    //storage = JSON.parse(storage)
    if(storage && storage.user) {
        dispatch({
            type: LOGIN_SUCESS,
            payload: storage.user
        })
    }
}

export let doGoogleLoginAction = () => (dispatch, getState) => {
    dispatch({
        type: LOGIN
    })
    return loginWithGoogle()
        .then(user =>{
            dispatch({
                type: LOGIN_SUCESS,
                payload: {
                    uid:user.uid,
                    displayName:user.displayName,
                    email:user.email,
                    photoURL:user.photoURL
                }
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