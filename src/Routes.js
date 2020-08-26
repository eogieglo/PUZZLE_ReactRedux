import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/home/HomePage'
import FavPage from './components/favs/FavPage'
import LoginPage from './components/login/LoginPage'

function PrivateRoute({ path, component, ...rest }){
    let storage = localStorage.getItem('storage')
    //storage = JSON.parse(storage)
    if(storage && storage.user) 
    {
        return <Route path={path} component={component} {...rest}/>
    }
    else{
        return <Redirect to="/login" {...rest} />
    }
}

//NO ME FUNCIONO LOS LINKS DE INICIO Y LOGIN LUEGO DE INICIAR SESION, quedan en blanco y por console tengo un error de 

export default function Routes() {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/favs" component={FavPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}