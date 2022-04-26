import React from 'react'
import {NavLink} from "react-router-dom";

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Вес сегодня</h2>
            <p>Вес: <a>{link.from}</a></p>
            <p>Дата создания: <strong>{new Date().toLocaleDateString()}</strong></p>
            <NavLink to ="/links">Статистика</NavLink>
        </>
    )
}