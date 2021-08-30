import React from 'react'

export default function Alert(props) {
    const capital = (word) =>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
    return (
        <div style={{height: '60px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert"`}>
                <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}
