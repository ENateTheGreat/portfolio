import React from 'react'

function DragonMonsterStats({monsterHealth, monsterName, mStyle}) {
    return (
        <div className='monsterStats' style={{'display': mStyle}}>
            <span className="stat">Monster Name: <strong>{monsterName}</strong></span>
            <span className="stat">Health: <strong>{monsterHealth}</strong></span>
        </div>
    )
}

export default DragonMonsterStats
