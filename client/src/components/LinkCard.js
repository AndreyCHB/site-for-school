import React from 'react'
import {LinksPage} from "../pages/LinksPage";

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Вес сегодня</h2>
            <p>Вес: <a>{link.from}</a></p>
            <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
            <button className="btn yellow darken-4" style={{marginRight: 10}} disabled={loading} onClick={LinksPage}>Статистика</button>
        </>
    )
}