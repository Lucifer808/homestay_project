import React from 'react'
import { Outlet } from 'react-router-dom'
const NotFoundRoute = ({isAdmin}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'red', fontSize: '1.4rem', height: '100%', width: '100%'}}>
        404 NOT FOUND
    </div>
  )
}

export default NotFoundRoute