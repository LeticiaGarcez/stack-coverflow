import React from 'react'
import './Button.css'

const Button = ({label}) => {
    return <React.Fragment>
                <button className='button'>{label}</button>
            </React.Fragment>
    
}
export default Button