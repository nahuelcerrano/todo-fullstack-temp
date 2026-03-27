import React from 'react'


function ErrorMessage({ showError }) {
    if (!showError) return null



    return (
        <div className='error-popup'>
            <span className='error-icon'>⚠️</span>
            <p>Oops! La tarea no puede estar vacia</p>
        </div>
    )
}

export default ErrorMessage

