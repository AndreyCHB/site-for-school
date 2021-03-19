import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Вес сегодня</h2>
            <p>Вес: <a>{link.from}</a></p>
            <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
            <button onClick="location.href = 'https://site-for-school1.herokuapp.com/links'">Кнопка-ссылка</button>
        </>
    )
}