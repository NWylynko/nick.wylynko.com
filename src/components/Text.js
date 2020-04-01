import React from 'react';

export function LinkHeaderText(props) {
    return <p style={{fontSize: '22px', margin: 1, padding: 1, color: 'LightBlue', textDecoration: 'underline'}} {...props}/>
}

export function HeaderText(props) {
    return <p style={{fontSize: '22px', margin: 1, padding: 1}} {...props}/>
}

export function BodyA(props) {
    return <a style={{fontSize: '16px', margin: 1, padding: 1}} {...props}/>
}

export function BodyText(props) {
    return <p style={{fontSize: '16px', margin: 1, padding: 1}} {...props}/>
}

export function SecondaryText(props) {
    return <p style={{fontSize: '14px', margin: 1, padding: 1}} {...props}/>
}