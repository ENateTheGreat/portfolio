import React from 'react'

function DragonStats({ xp, health, gold}) {
    return (
        <div className='stats'>
            <span className="stat">XP: <strong>{xp}</strong></span>
            <span className="stat">Health: <strong>{health}</strong></span>
            <span className="stat">Gold: <strong>{gold}</strong></span>
        </div>
    )
}

export default DragonStats
