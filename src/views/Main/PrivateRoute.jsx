import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie } from  '../../utils/optCookie'

export default ({ component, ...props }) => {
    const token = getCookie('CINCO')
    return (
        <Route {...props}
            render={() => {
            const Component = component
            if( token ){
                return <Component></Component>
            } else{
                return <Redirect to="/login" ></Redirect>
            }
        }}
        ></Route>
    )
}